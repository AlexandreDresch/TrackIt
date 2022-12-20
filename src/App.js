import styled from "styled-components";

import { UserProvider } from "./context/userContext";
import { UserProgressProvider } from "./context/userProgressContext";

import { GlobalStyle } from "./global/styles";

import Routes from "./routes/routes";

export default function App() {
  return (
    <Container>
      <UserProvider>
        <UserProgressProvider>
          <GlobalStyle />
          <Routes />
        </UserProgressProvider>
      </UserProvider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
