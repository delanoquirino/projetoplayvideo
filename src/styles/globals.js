import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #0f0f0f;
    
  }

  @media (max-width: 1024px) {
    html {
      font-size: 88.5%;
    }
  }
  @media (max-width: 768px) {
    html {
      font-size: 78.5%;
    }
  }
`;
