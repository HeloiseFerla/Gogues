import styled from 'styled-components';

const SNavMenu = styled.nav`
  display: ${(prop) => (prop.burgerOpen ? 'block' : 'none')};
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  padding-top: 80px;
  left: 0;
  text-align: center;
  background-color: #8f94b92a;

  ul {
    margin-top: 15vh;

    li {
      margin: 3vh;
      a {
        font-weight: bold;
        font-size: 1.8rem;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    position: static;
    display: flex;
    height: 80px;
    width: inherit;
    margin: auto;
    padding: 0px;
    background: none;

    ul {
      display: flex;
      margin: auto;

      li {
        margin: auto 2vw;

        a {
          font-family: var(--font-text);
          font-weight: bold;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default SNavMenu;
