import PropTypes from 'prop-types';
import './style.css';
import User from '../user';

export default function NavMenu({ burgerOpen }) {
  return (
    <>
      <nav className={` ${burgerOpen ? 'showMenu' : 'navMenu'}`}>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/Bars">Bars</a>
          </li>
          <li>
            <a href="/Restaurants">Restaurants</a>
          </li>
        </ul>
      </nav>
      {burgerOpen ? <User burgerOpen={burgerOpen} /> : null}
    </>
  );
}
NavMenu.propTypes = {
  burgerOpen: PropTypes.bool,
};
NavMenu.defaultProps = {
  burgerOpen: false,
};
