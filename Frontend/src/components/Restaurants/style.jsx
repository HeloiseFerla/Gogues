import styled from 'styled-components';

const SRestaurants = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 0;
  h2 {
    margin-bottom: 2vh;
  }
  div.search {
    width: 80vw;
    padding: 5vh 10vw;
    h3,
    h4 {
      justify-content: start;
    }
    h4 {
      font-size: 1rem;
    }
    div {
      padding: 2vh 0;
    }
  }
  div.map {
    width: 80vw;
  }
`;

export default SRestaurants;
