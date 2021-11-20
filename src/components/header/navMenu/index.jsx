import PropTypes from 'prop-types';
import SNavMenu from './style';

export default function NavMenu({ burgerOpen }) {
  return (
    <SNavMenu burgerOpen={burgerOpen}>
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
    </SNavMenu>
  );
}
NavMenu.propTypes = {
  burgerOpen: PropTypes.bool,
};
NavMenu.defaultProps = {
  burgerOpen: false,
};
