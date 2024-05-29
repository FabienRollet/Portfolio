export default function Projets() {
  return (
    <section className="bg-primary-color p-3 projetitle">
      <h2>Mes projets !</h2>
      <article className="projet">
        <h3>
          <a href="" target="_blank">
            Croissant clicker
          </a>
        </h3>
        <p>
          Projet en équipe de 2 semaines en HTML, CSS et JS, basé sur le jeu
          Cookie clicker.
        </p>
        <img src="../Croissant.png" alt="croissantLogo" />
      </article>
      <article className="projet">
        <h3>
          <a href="https://nebula-project.vercel.app/" target="_blank">
            Nebula
          </a>
        </h3>
        <p>
          Projet en équipe de 3 semaines en React et SCSS avec utilisation d’une
          API.
        </p>
        <img src="../nebula.jpg" alt="NebulaLogo" />
      </article>
      <article className="projet">
        <h3>
          <a href="https://senior-sanctuary.webflow.io/" target="_blank">
            Senior Sanctuary
          </a>
        </h3>
        <p>
          “Hackathon” de 48h pour créer un projet en collaboration avec une
          équipe de data.
        </p>
        <img src="../senior.svg" alt="SeniorLogo" />
      </article>
      {/* <article className="projet">
        <h3>Hackathon</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img src="" alt="HackathonLogo" />
      </article>
      <article className="projet">
        <h3>P3</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
          hic praesentium et.
        </p>
        <img src="" alt="P3Logo" />
      </article> */}
    </section>
  );
}
