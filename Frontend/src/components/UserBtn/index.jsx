import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SUserBtn from './style';

export default function UserBtn({
  burgerOpen,
  className,
  setModalLogin,
  setModalAccount,
}) {
  const showLogin = () => {
    setModalLogin(true);
  };

  const showModalAccount = () => {
    setModalAccount((prev) => !prev);
  };
  const user = useSelector((state) => state.user);
  return (
    <SUserBtn
      burgerOpen={burgerOpen}
      className={className}
      isLogged={user.isLogged}
      onClick={user.id ? showModalAccount : showLogin}
    >
      <svg
        aria-label="Icône connexion"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="user"
        className="svg-inline--fa fa-user fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="white"
          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
        />
      </svg>
      <span>{user.isLogged ? `Compte` : 'Connexion'}</span>
    </SUserBtn>
  );
}
UserBtn.propTypes = {
  burgerOpen: PropTypes.bool,
  className: PropTypes.string,
  setModalLogin: PropTypes.func,
  setModalAccount: PropTypes.func,
};
UserBtn.defaultProps = {
  burgerOpen: false,
  className: '',
  setModalLogin: () => {},
  setModalAccount: () => {},
};
