import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "Ubuntu", sans-serif;
    font-size: 62.5%; //10px
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
  
  .container {

    width: min(144rem, 100%);
    margin-inline: auto;   
  }

  .content {
    width: min(144rem, 100%);
    margin-inline: auto;   

    @media screen and (min-width: 767px){
      padding-inline: 5rem;
    }
  }
  
  body {
    
    background-color: ${(props) => props.theme.background}
  }

  button {
    padding: 1.4rem 2.5rem;
    border-radius: 2.5rem;
    color: ${(props) => props.theme.color.text};
    border: none;
    border: 2px solid white;
    background: linear-gradient(
      97.32deg,
      rgba(66, 174, 174, 0.75) -3.47%,
      rgba(89, 63, 251, 0.75) 108.43%
    );
    box-shadow: 0px 30px 50px rgba(168, 22, 75, 0.15);
    font-family: "Ubuntu", sans-serif;
  }

  .capsLock {
    text-transform: uppercase ;
  }
`;
