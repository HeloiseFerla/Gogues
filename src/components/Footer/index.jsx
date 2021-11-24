import SFooter from './style';
import github from '../../assets/github-brands.svg';
import linkedin from '../../assets/linkedin-brands.svg';

export default function Footer() {
  return (
    <SFooter>
      <button type="button">Contact</button>
      <div className="text">
        <p>Site créé par : </p>
        <p>Héloïse Ferla</p>
      </div>

      <div className="links">
        <a
          href="https://github.com/HeloiseFerla"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="logo github" />
        </a>
        <a
          href="https://www.linkedin.com/in/h%C3%A9lo%C3%AFseferla/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="logo linkedin" />
        </a>
      </div>
    </SFooter>
  );
}
