import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Container, ContentContainer, Title, Text } from "./styles";

export function History() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Title>Histórico</Title>

        <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
      </ContentContainer>
      <Footer />
    </Container>
  );
}
