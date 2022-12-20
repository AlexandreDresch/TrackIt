import { Link } from "react-router-dom";

import { ProgressBar } from "./ProgressBar";

import { Container, Button } from "./styles";

export function Footer() {
  return (
    <Container>
      <Link to={"/habitos"}>
        <Button>Hábitos</Button>
      </Link>

      <ProgressBar />

      <Link to={"/historico"}>
        <Button>Histórico</Button>
      </Link>
    </Container>
  );
}
