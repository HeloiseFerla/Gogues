import styled from 'styled-components';

const STopBtn = styled.button`
  position: fixed;
  bottom: 20vh;
  right: 5vw;
  opacity: 0;
  transition: opacity 0.3s;
  &.show {
    opacity: 1;
  }
  img {
    height: 35px;
    width: 35px;
  }
`;

export default STopBtn;
