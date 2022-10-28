import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "Ubuntu", sans-serif;
    font-size: 62.5%; 
    font-weight: 400;
  }
  
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  .content {
    width: min(144rem, 100%);
    margin-inline: auto;
  }
  
  body {
    
    background-color: ${(props) => props.theme.background}
  }

`;
