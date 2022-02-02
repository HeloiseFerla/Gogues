import styled from 'styled-components';

const SModalLogin = styled.section`
  margin: 30px auto;
  min-height: 100vh;
  width: 80vw;
  background: white;
  article.log {
    margin: 30px auto;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      div.radio {
        margin: 30px 0px;
        width: 80%;
        display: flex;
        justify-content: center;
        label {
          display: flex;
          width: 30%;
        }
        input#woman,
        input#man {
          margin: 0px;
          width: 20px;
        }
      }

      input {
        :focus {
          outline: none;
        }
        width: 80%;
        border: none;
        border-bottom: solid 2px#00000078;
        margin: 20px 0px;
        &:nth-child(5) {
          margin-bottom: 0px;
        }
      }
      ul {
        background: white;
        width: 80%;
        max-height: 200px;
        overflow: scroll;

        li {
          width: 80%;
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
    }
  }

  //z-index: 2;
  /* article {
    width: 50%;
  } */
`;

export default SModalLogin;
