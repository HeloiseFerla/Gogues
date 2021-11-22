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
  --color-light: #f0daff;
  --color-dark: #36465c;
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
  }

  
  section{
    margin:10vw;
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
  }

`;

export default GlobalStyle;
