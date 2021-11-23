import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
  --font-logo: 'Jua', sans-serif;
  --font-titles: 'Anton', sans-serif;
  --font-text: 'Roboto', sans-serif;
  --color-flash: #ff5945;
  --color-light: #f0ffba;
  --color-dark: #36465c;
  }
 

  * {

    color: black;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  span,a,
  p {
    font-family: var(--font-text);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  body{
    height: 400vh;
  }
`;

export default GlobalStyle;
