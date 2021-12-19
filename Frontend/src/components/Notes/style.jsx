import styled from 'styled-components';

const SNotes = styled.ul`
  width: 200px;
  padding: 0 10px;
  li {
    display: flex;
    justify-content: space-between;
    line-height: 1.5rem;
    h4 {
      font-size: 0.7rem;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        height: 10px;
        width: auto;
      }
    }
  }
`;

export default SNotes;
