import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  padding: 0 10vw;
  border-bottom: 1px solid #c0c0c0;
  a {
    margin: 0 auto;
    z-index: 4;

    span {
      font-size: 2.2rem;
    }
  }
  @media only screen and (min-width: 700px) {
    a {
      margin: 0;
    }
  }
`;

export default SHeader;
