import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
  }

  h1 {
    text-align: center;
    margin-top: 20px;
  }

  p {
    font-size: 14px;
    color: red;
    text-align: center;
  }
`;

export default GlobalStyle;