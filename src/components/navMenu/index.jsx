import './style.css';

export default function NavMenu() {
  return (
    <nav className="navMenu">
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/Bars">Bars</a>
        </li>
        <li>
          <a href="/Restaurants">Restaurants</a>
        </li>
      </ul>
    </nav>
  );
}
