import styled from 'styled-components';

const SUserBtn = styled.button`
  ${(p) =>
    p.burgerOpen &&
    `display:flex;
    ${p.isLogged && `display:none;`}
    `}};
  background: var(--color-flash);
  color: white;
  width: ${(props) => (props.burgerOpen ? '150px' : '2.2rem')};
  height: ${(props) => (props.burgerOpen ? '35px' : '2.2rem')};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: ${(props) => (props.burgerOpen ? 'absolute' : '')};
  top: 60vh;
  margin: ${(props) => (props.burgerOpen ? '0 auto' : '')};
  left: 0px;
  right: 0px;
  z-index: 3;
  &.homeBtn {
    display: ${(p) => (p.isLogged ? 'none' : 'flex')}; */
    width: 150px;
    height: 35px;
    margin: auto;
    svg {
      padding-right: 0.5rem;
    }
    span {
      display: block;
    }
  }
  svg {
    height: 20px;
    padding-right: ${(props) => (props.burgerOpen ? '0.5rem' : '0px')};
  }
  span {
    display: ${(p) => (p.burgerOpen || p.homeBtn ? 'block' : 'none')};
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }

  @media only screen and (min-width: 700px) {
    display: flex;
    width: 150px;
    height: 35px;

    svg {
      padding-right: 0.5rem;
    }
    span {
      display: block;
    }
  }
`;

export default SUserBtn;
