import styled from 'styled-components';

const SMyAccount = styled.section`
  margin: 30px 10vw;
  min-height: 100vh;
  width: 80vw;
  .cross {
    margin-left: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: none;
    span {
      display: block;
      width: 2.4rem;
      height: 0.2rem;
      border-radius: 20px;
      background: black;
      position: relative;
      :first-child {
        transform-origin: left top;
        transform: rotate(45deg);
      }
      :last-child {
        transform-origin: left bottom;
        transform: rotate(-45deg);
      }
    }
  }
  h2 {
    margin-top: 50px;
  }
  div.type {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 40px 10px;
    span.field {
      color: #000000ae;
    }
    span.user {
      font-weight: bold;
    }
    /* &:last-of-type {
      margin-bottom: 100px;
    } */
    div.city {
      display: flex;
      flex-direction: column;
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
            width: 170px;
            text-align: left;
          }
        }
      }
    }
    div.radio {
      margin: 30px 0px;
      width: 60%;
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
      width: 170px;
      border: none;
      border-bottom: solid 2px #00000078;
      :focus {
        outline: none;
      }
    }
  }
  button.changeData {
    width: 200px;
    background: var(--color-dark);
    color: white;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 20px calc((80vw - 200px) / 2);
  }
`;

export default SMyAccount;
