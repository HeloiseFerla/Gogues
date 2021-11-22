import { useState } from 'react';
import NavMenu from './navMenu';
import Burger from './burger';
import User from './user';
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
      {burgerOpen ? <User burgerOpen={burgerOpen} /> : null}
      <User />
    </SHeader>
  );
}
