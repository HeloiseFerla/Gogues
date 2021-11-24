import styled from 'styled-components';

const SBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  z-index: 15;

  span {
    display: block;
    width: 2rem;
    height: 0.2rem;
    border-radius: 20px;
    background-color: black;
    position: relative;
    transition: 0.5s ease-in-out;
    :first-child {
      transform-origin: left top;
      transform: ${(props) => (props.open ? 'rotate(41deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${(props) => (props.open ? '0' : '1')};
      transform: ${(props) => (props.open ? 'translateX(20px)' : '')};
    }
    :nth-child(3) {
      transform-origin: left bottom;
      transform: ${(props) => (props.open ? 'rotate(-41deg)' : 'rotate(0)')};
    }
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export default SBurger;
