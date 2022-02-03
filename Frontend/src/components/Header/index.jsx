import { Link } from 'react-router-dom';
import { useState } from 'react';
import propTypes from 'prop-types';
import NavMenu from './NavMenu';
import Burger from './Burger';
import UserBtn from '../UserBtn';
import SHeader from './style';
import ModalAccount from './ModalAccount';

export default function Header({ setModalLogin, setMyAccount }) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [modalAccount, setModalAccount] = useState(false);

  return (
    <SHeader>
      <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      <Link to="/" aria-label="Lien vers l'accueil">
        <span className="logo">Gogues</span>
      </Link>
      <NavMenu burgerOpen={burgerOpen} />
      {burgerOpen ? <UserBtn burgerOpen={burgerOpen} /> : null}
      <UserBtn
        burgerOpen={burgerOpen}
        setModalLogin={setModalLogin}
        setModalAccount={setModalAccount}
      />
      {modalAccount && (
        <ModalAccount
          setModalAccount={setModalAccount}
          setMyAccount={setMyAccount}
        />
      )}
    </SHeader>
  );
}
Header.propTypes = {
  setModalLogin: propTypes.func,
  setMyAccount: propTypes.func,
};

Header.defaultProps = {
  setModalLogin: () => {},
  setMyAccount: () => {},
};
