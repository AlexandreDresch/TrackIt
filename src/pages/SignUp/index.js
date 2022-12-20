import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/Input";
import { LogButton } from "../../components/LogButton";

import Logo from "../../assets/logo.svg";

import { Container, Image, FormContainer, Text } from "./styles";

import { api } from "../../services/api";

export function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleCreateAccount(e) {
    e.preventDefault();
    setIsLoading(true);
    if (validateEmail(email) && password.length >= 6 && name.length >= 2 && validateImage(image)) {
      api
        .post("/auth/sign-up", {
          email,
          name,
          image,
          password
        })
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          alert("Erro ao cadastrar usuário, tente novamente");
          setIsLoading(false);
        });
    } else {
      alert("Erro ao cadastrar usuário, tente novamente");
      setIsLoading(false);
    }
  }

  function validateEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  }

  function validateImage(image) {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(image);
  }

  return (
    <Container>
      <Image src={Logo} />

      <FormContainer onSubmit={handleCreateAccount}>
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
        <Input
          placeholder={"nome"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
          type={"text"}
          dataTest={"user-name-input"}
        />
        <Input
          placeholder={"foto"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={isLoading}
          type={"text"}
          dataTest={"user-image-input"}
        />
        <LogButton text={"Cadastrar"} disabled={isLoading} dataTest={"signup-btn"}/>
      </FormContainer>

      <Link to={"/"} data-test="login-link">
        <Text>Já tem uma conta? Faça login!</Text>
      </Link>
    </Container>
  );
}
