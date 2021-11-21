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

      .inactive,
      .active {
        font-weight: bold;
        font-size: 1.8rem;
        position: relative;

        &.active::before {
          position: absolute;
          bottom: -7px;
          left: 25%;
          right: 25%;
          content: '';
          width: 40%;
          height: 2.5px;
          background-color: black;
          border-radius: 8px 8px 0px 0px;
          margin: auto;
        }
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

        .inactive,
        .active {
          font-family: var(--font-text);
          font-weight: bold;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default SNavMenu;
