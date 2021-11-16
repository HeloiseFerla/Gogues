import { useState } from 'react';
import NavMenu from './navMenu';
import Burger from './burger';
import User from './user';
import './style.css';

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <header className="header">
      <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      <a className="logo" href="/" aria-label="Lien vers la page d'accueil">
        <span>Gogues</span>
      </a>
      <NavMenu burgerOpen={burgerOpen} />

      <User />
    </header>
  );
}
