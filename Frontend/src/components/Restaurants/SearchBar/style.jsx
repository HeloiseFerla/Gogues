import styled from 'styled-components';

const SSearchBar = styled.div`
  input {
    :focus {
      outline: none;
    }
  }
  ul {
    max-height: 200px;
    overflow: scroll;

    li {
      padding: 5px 0;
      :hover {
        background-color: var(--color-light);
      }
      border-top: 1px solid var(--color-light);
      button {
        height: 100%;
        width: 100%;
        text-align: left;
      }
    }
  }
`;
export default SSearchBar;
