import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavMenu from './NavMenu';
import Burger from './Burger';
import UserBtn from '../UserBtn';
import SHeader from './style';

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <SHeader>
      <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      <Link to="/" aria-label="Lien vers l'accueil">
        <span className="logo">Gogues</span>
      </Link>
      <NavMenu burgerOpen={burgerOpen} />
      {burgerOpen ? <UserBtn burgerOpen={burgerOpen} /> : null}
      <UserBtn burgerOpen={burgerOpen} />
    </SHeader>
  );
}
