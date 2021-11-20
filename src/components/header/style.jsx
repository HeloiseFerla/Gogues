import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  padding: 0 10vw;

  a {
    margin: 0 auto;

    span {
      font-family: var(--font-logo);
      font-size: 2.2rem;
    }
  }
  @media only screen and (min-width: 600px) {
    a {
      margin: 0;
    }
  }
`;

export default SHeader;
