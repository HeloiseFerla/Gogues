import { api, cookies } from 'conf';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SModalAccount from './style';

export default function ModalAccount({ setModalAccount, setMyAccount }) {
  const dispatch = useDispatch();

  const showMyAccount = () => {
    setMyAccount(true);
    setModalAccount(false);
  };

  const handleLogout = () => {
    cookies.set('token', null);
    api.defaults.headers.authorization = null;
    dispatch({ type: 'LOGOUT' });
    setModalAccount(false);
    setMyAccount(false);
  };
  return (
    <SModalAccount>
      <li>
        <button type="button" onClick={showMyAccount}>
          Mon compte
        </button>
      </li>
      <li>
        <button type="button" onClick={handleLogout}>
          Déconnexion
        </button>
      </li>
    </SModalAccount>
  );
}
ModalAccount.propTypes = {
  setModalAccount: PropTypes.func,
  setMyAccount: PropTypes.func,
};
ModalAccount.defaultProps = {
  setModalAccount: () => {},
  setMyAccount: () => {},
};
