import { useState } from 'react';
import NavMenu from './navMenu';
import Burger from './burger';
import UserBtn from '../userBtn';
import SHeader from './style';

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <SHeader>
      <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      <a href="/" aria-label="Lien vers la page d'accueil">
        <span className="logo">Gogues</span>
      </a>
      <NavMenu burgerOpen={burgerOpen} />
      {burgerOpen ? <UserBtn burgerOpen={burgerOpen} /> : null}
      <UserBtn burgerOpen={burgerOpen} />
    </SHeader>
  );
}
