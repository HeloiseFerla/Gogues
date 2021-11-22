import toilet from '../../assets/toilet2.jpeg';
import SMain from './style';

export default function Home() {
  return (
    <SMain>
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

      <section className="Steps">
        <h2>Comment ça marche ?</h2>
        <article>
          <h3>{`Choisis une catégorie d'établissement `}</h3>
        </article>
        <article>Recherche</article>
        <article>Resultats</article>
        <article>Connexion</article>
      </section>
    </SMain>
  );
}
