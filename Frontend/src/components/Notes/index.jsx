import SNotes from './style';
import star from '../../assets/star-regular.svg';

export default function Notes() {
  const notes = ['Propreté', 'Taille', 'Intimité', 'Lavage mains', 'Quantité'];

  return (
    <SNotes>
      {notes.map((note) => {
        return (
          <li key={note}>
            <h4>{note} : &nbsp;</h4>
            <div>
              <img src={star} alt="Icone étoile" />
              <img src={star} alt="Icone étoile" />
              <img src={star} alt="Icone étoile" />
              <img src={star} alt="Icone étoile" />
              <img src={star} alt="Icone étoile" />
            </div>
          </li>
        );
      })}
    </SNotes>
  );
}
