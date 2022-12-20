import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { Input } from "../../components/Input";
import { LogButton } from "../../components/LogButton";

import { UserContext } from "../../context/userContext";

import { api } from "../../services/api";

import Logo from "../../assets/logo.svg";

import { Container, Image, FormContainer, Text } from "./styles";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  function handleLogIn(e) {
    e.preventDefault();
    setIsLoading(true);
    if (validateEmail(email) && password.length >= 6) {
      api
        .post("/auth/login", {
          email,
          password,
        })
        .then((res) => {
          setUserData({
            id: res.data.id,
            name: res.data.name,
            image: res.data.image,
            email: res.data.email,
            password: res.data.password,
            token: res.data.token,
          });
          navigate("/hoje");
        })
        .catch(() => {
          alert("Erro ao efetuar login, tente novamente");
          setIsLoading(false);
        });
    } else {
      alert("Erro ao efetuar login, tente novamente");
      setIsLoading(false);
    }
  }

  function validateEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  }

  return (
    <Container>
      <Image src={Logo} />

      <FormContainer onSubmit={handleLogIn}>
        <Input
          placeholder={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          type={"email"}
          dataTest={"email-input"}
        />
        <Input
          placeholder={"senha"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          type={"password"}
          dataTest={"password-input"}
        />
        <LogButton
          text={"Entrar"}
          disabled={isLoading}
          dataTest={"login-btn"}
        />
      </FormContainer>

      <Link to={"/cadastro"} data-test="signup-link">
        <Text>Não tem uma conta? Cadastre-se!</Text>
      </Link>
    </Container>
  );
}
