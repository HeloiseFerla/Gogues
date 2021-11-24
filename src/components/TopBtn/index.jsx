import { useState } from 'react';
import top from '../../assets/top.svg';
import STopBtn from './style';

export default function TopBtn() {
  const [y, setY] = useState(0);

  window.onscroll = () => {
    setY(window.scrollY);
  };

  return (
    <STopBtn
      aria-label="Retour en haut de la page"
      className={y > 200 ? 'show' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img src={top} alt="icône retour en haut de la page" />
    </STopBtn>
  );
}
