import PropTypes from 'prop-types';
import SBurger from './style';

export default function Burger({ setBurgerOpen, burgerOpen }) {
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  return (
    <SBurger onClick={toggleBurger} open={burgerOpen}>
      <span />
      <span />
      <span />
    </SBurger>
  );
}

Burger.propTypes = {
  burgerOpen: PropTypes.bool,
  setBurgerOpen: PropTypes.func,
};
Burger.defaultProps = {
  burgerOpen: false,
  setBurgerOpen: () => {},
};
