import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {

    color: black;
    box-sizing: border-box;
  }

  body{
  --font-logo: 'Jua', sans-serif;
  --font-titles: 'Anton', sans-serif;
  --font-text: 'Roboto', sans-serif;
  --color-flash: #ff5945;
  --color-light: #ddd5e6;
  --color-dark: #36465c;
  --color-border:#c0c0c0;
  }

  .flash{
    color: var(--color-flash);
  }

  .italic{
    font-style: italic;
  }

  .logo{
      font-family: var(--font-logo);
  }

  h1,h2,h3{
    font-family:var(--font-titles);
    display:flex;
    justify-content:center;
    align-items: center;
  }

  h1{
    font-size: 40px;
    line-height: 60px;
  }

  h2{
    font-size: 1.5rem;
    margin-bottom:5vh;
  }
  h3{
    margin-bottom:2vh;
  }
  
  section{
    padding:10vw;
    
  }

  a {
    text-decoration: none;
  }

  span,a,
  p {
    font-family: var(--font-text);
    line-height: 1.5rem;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

`;

export default GlobalStyle;
