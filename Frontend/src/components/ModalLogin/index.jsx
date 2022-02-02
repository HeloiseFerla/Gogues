import Login from './Login';
import Signup from './Signup';
import SModalLogin from './style';

export default function ModalLogin() {
  return (
    <SModalLogin>
      <Login />
      <Signup />
    </SModalLogin>
  );
}
