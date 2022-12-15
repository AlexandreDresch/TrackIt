import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/Input";
import { LogButton } from "../../components/LogButton";

import { api } from "../../services/api";

import Logo from "../../assets/logo.svg";

import { Container, Image, FormContainer, Text } from "./styles";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleLogIn(e) {
    e.preventDefault();
    setIsLoading(true);
    if(validateEmail(email) && password.length >= 6) {
      api.post('/auth/login', {
        email,
        password
      })
      .then((res) => {
        console.log(res);
        navigate('/habitos')
      })
      .catch(() => {
        alert('Erro ao efetuar login, tente novamente');
        setIsLoading(false);
      })
    } else {
      alert('Erro ao efetuar login, tente novamente');
      setIsLoading(false);
    }    
  }

  function validateEmail(email){
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
        />
        <Input
          placeholder={"senha"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          type={"password"}
        />
        <LogButton text={"Entrar"} disabled={isLoading} />
      </FormContainer>

      <Link to={"/cadastro"}>
        <Text>Não tem uma conta? Cadastre-se!</Text>
      </Link>
    </Container>
  );
}