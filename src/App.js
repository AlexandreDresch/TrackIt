import styled from "styled-components";

import { GlobalStyle } from "./global/styles";

import Routes from "./routes/routes";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

