import UserBtn from '../UserBtn';
import SHome from './style';
import Notes from '../Notes';
import toilet from '../../assets/toilet.jpeg';
import bar from '../../assets/bar.svg';
import cafe from '../../assets/café.svg';
import restaurant from '../../assets/restaurant.svg';
import location from '../../assets/location.svg';
import building from '../../assets/building.svg';

export default function Home() {
  return (
    <SHome>
      <section className="presentation">
        <h1>{`Aller au WC l'esprit léger ! `}</h1>
        <img src={toilet} alt="wc" />
        <div className="text">
          <p>
            Vous cherchez à passer un bon moment dans un bar ou un restaurant ?
          </p>
          <p>
            Les informations concernant la qualité des mets d’un restaurant ou
            des brevages d’un bar sont aisés à trouver sur le net.
          </p>
          <p>
            Quid des <span className="flash">toilettes</span> ?
          </p>
          <p>
            Les utiliser relève pourtant d’un
            <span className="italic"> besoin</span> inévitable et vital.
          </p>
          <p>
            <span className="logo">Gogues</span> te permettra de répondre à ce
            <span className="italic"> besoin</span> les yeux fermés (ou
            presque).
          </p>
        </div>
      </section>

      <section className="steps">
        <h2>Comment ça marche ?</h2>
        <article>
          <img className="svg" src={bar} alt="icône bar" />
          <img className="svg" src={cafe} alt="icône café" />
          <img className="svg" src={restaurant} alt="icone restaurant" />
          <h3>{`Choisis une catégorie d'établissement `}</h3>
          <p>Bars ou restaurants</p>
        </article>
        <article>
          <img className="svg" src={building} alt="icône établissement" />
          <img className="svg" src={location} alt="icône lieu" />
          <h3>{`Cherche un établissement `}</h3>
          <p>{`Par nom d'établissement ou par lieu `}</p>
        </article>
        <article>
          <Notes />
          <h3>Choisis un établissement et consulte les avis</h3>
        </article>
        <article>
          <h3>Donne ton avis </h3>
          <UserBtn className="homeBtn" />
        </article>
      </section>
    </SHome>
  );
}
