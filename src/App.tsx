import styled from "styled-components"
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { TopArea } from "./GitHubUser/TopArea";
import React, { useState } from "react";
import { UserProps } from "./types";

function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }

  return (
    <ThemeContextProvider>
      <Container>
        <TopArea setUser={setUserData} />
      </Container>
    </ThemeContextProvider>
  );
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3.1rem 2.4rem;

  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default App
