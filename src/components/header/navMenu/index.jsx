import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SNavMenu from './style';

export default function NavMenu({ burgerOpen }) {
  return (
    <SNavMenu burgerOpen={burgerOpen}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/Bars"
          >
            Bars
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/Restaurants"
          >
            Restaurants
          </NavLink>
        </li>
      </ul>
    </SNavMenu>
  );
}
NavMenu.propTypes = {
  burgerOpen: PropTypes.bool,
};
NavMenu.defaultProps = {
  burgerOpen: false,
};
