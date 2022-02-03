import PropTypes from 'prop-types';
import Login from './Login';
import Signup from './Signup';
import SModalLogin from './style';

export default function ModalLogin({ setModalLogin }) {
  const handleClick = () => {
    setModalLogin(false);
  };
  return (
    <SModalLogin>
      <button
        type="button"
        aria-label="cross"
        className="cross"
        onClick={handleClick}
      >
        <span />
        <span />
      </button>
      <Login setModalLogin={setModalLogin} />
      <Signup setModalLogin={setModalLogin} />
    </SModalLogin>
  );
}
ModalLogin.propTypes = {
  setModalLogin: PropTypes.func,
};

ModalLogin.defaultProps = {
  setModalLogin: () => {},
};
