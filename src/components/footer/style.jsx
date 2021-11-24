import styled from 'styled-components';

const SFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 80px;
  border-top: 1px solid var(--color-border);
  text-align: center;
  .text {
    text-align: center;
  }

  .links {
    display: flex;

    a {
      img {
        height: 30px;
        width: auto;
        padding: 0 10px;
      }
    }
  }

  button {
    font-size: 1rem;
    background: var(--color-dark);
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
  @media only screen and (min-width: 600px) {
    .text {
      display: flex;
      p {
        padding-left: 5px;
      }
    }
  }
`;
export default SFooter;
