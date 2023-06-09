import './App.css';
import styled from "styled-components"
import { ThemeContextProvider } from './contexts/themeContext';

function App() {

  return (
    <ThemeContextProvider>
      <Container>
        
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

export default App;
