import styled from 'styled-components';

const SPageNumbers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
  }
  button {
    height: 100%;
    width: 100 %;
    padding: 10px;
    border: 1px solid var(--color-dark);
    &.active {
      background-color: var(--color-dark);
      color: white;
    }
    &.previous,
    &.next {
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

export default SPageNumbers;
