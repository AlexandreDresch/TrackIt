import { Link } from "react-router-dom";

import { ProgressBar } from "./ProgressBar";

import { Container, Button } from "./styles";

export function Footer() {
  return (
    <Container data-test="menu">
      <Link to={"/habitos"} data-test="habit-link">
        <Button>Hábitos</Button>
      </Link>

      <ProgressBar />

      <Link to={"/historico"} data-test="history-link">
        <Button>Histórico</Button>
      </Link>
    </Container>
  );
}
