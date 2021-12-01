import styled from 'styled-components';

const SHome = styled.main`
  .presentation,
  .steps {
    padding: 10vw;
  }

  .presentation {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: calc(40vh - 80px) 20vh 40vh 60vh;
    padding: 0;
    text-align: center;

    h1 {
      grid-column: 1 / span 1;
      grid-row: 2 / 3;
      z-index: 2;
      background-color: #ffffff9d;
      padding: 5vw;
    }
    img {
      grid-column: 1 / span 1;
      grid-row: 1 / 4;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .text {
      margin: auto 10vw;
      grid-column: 1 / span 1;
      grid-row: 4 /5;
      font-size: 1.3rem;

      p:first-child,
      p:nth-child(2),
      p:nth-child(3),
      p:nth-child(5) {
        padding: 1rem;
      }
    }
  }

  .steps {
    background-color: var(--color-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2rem;
    justify-content: center;

    article {
      width: 60vw;
      border-radius: 10px;
      margin-bottom: 5vh;
      padding: 1rem;
      background-color: white;
      text-align: center;

      img.svg {
        height: 30px;
        width: 30px;
        margin: 1rem;
      }
      img.png {
        height: 100px;
        width: auto;
        margin: 1rem;
      }
      .homeBtn {
        display: flex;
      }
      p {
        text-align: center;
      }
    }
  }
  @media only screen and (min-width: 700px) {
    .presentation {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: calc(30vh - 80px) 70vh;
      text-align: left;
      padding-left: 5vw;
      h1 {
        grid-row: 1 / span 1;
        padding: 0;
        justify-content: left;
        align-items: flex-end;
      }
      img {
        grid-column: 2 / span 1;
        grid-row: 1 / 3;
      }
      .text {
        grid-column: 1 / span 1;
        grid-row: 2 /3;
        font-size: 1.3rem;
        margin: 5vh 5vw 0 0;

        p:first-child,
        p:nth-child(2),
        p:nth-child(3),
        p:nth-child(4),
        p:nth-child(5) {
          padding: 0.5rem 0;
        }
      }
    }
    .steps {
      flex-flow: row wrap;
      justify-content: space-around;
      h2 {
        width: 100vw;
      }
      article {
        height: 30vh;
        width: 30vw;
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        h3 {
          width: 100%;
        }
        p {
          width: 100%;
        }
      }
    }
  }
`;
export default SHome;
