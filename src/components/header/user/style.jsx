import styled from 'styled-components';

const SUser = styled.button`
  display: ${(props) => (props.burgerOpen ? 'flex' : '')};
  background: var(--color-flash);
  color: white;
  width: ${(props) => (props.burgerOpen ? '150px' : '2.2rem')};
  height: ${(props) => (props.burgerOpen ? '35px' : '2.2rem')};
  border: none;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  position: ${(props) => (props.burgerOpen ? 'absolute' : '')};

  top: 60vh;
  margin: ${(props) => (props.burgerOpen ? '0 auto' : '')};
  left: 0px;
  right: 0px;

  svg {
    height: 20px;
    padding-right: ${(props) => (props.burgerOpen ? '0.5rem' : '0px')};
  }
  span {
    display: ${(props) => (props.burgerOpen ? 'block' : 'none')};
    color: white;
    font-weight: bold;
    font-size: 16px;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    width: 150px;
    height: 35px;
    align-items: center;
    justify-content: center;

    svg {
      padding-right: 0.5rem;
    }
    span {
      display: block;
      color: white;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
/*


.burgerCo span {
  display: block;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.burgerCo svg {
  padding-right: 0.5rem;
  height: 20px;
}

*/
export default SUser;
