import './style.css';

export default function Burger() {
  return (
    <button className="burger" type="button">
      <div className="burgerLines topLine" />
      <div className="burgerLines middleLine " />
      <div className="burgerLines bottomLine" />
    </button>
  );
}
