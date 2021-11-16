import PropTypes from 'prop-types';

import './style.css';

export default function Burger({ setBurgerOpen, burgerOpen }) {
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  return (
    <button
      onClick={toggleBurger}
      className={` ${burgerOpen ? 'burger open' : 'burger'}`}
      type="button"
    >
      <div className="burgerLines " />
      <div className="burgerLines  " />
      <div className="burgerLines " />
    </button>
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
