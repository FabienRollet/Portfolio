export default function Projets() {
  return (
    <section className="bg-primary-color p-3 projetitle">
      <h2>Mes projets !</h2>
      <a
        href="https://fabienrollet.github.io/P1_clicker.github.io/"
        target="_blank"
      >
        <article className="projet">
          <h3>Croissant clicker</h3>
          <p>
            Projet en équipe de 2 semaines en HTML, CSS et JS, basé sur le jeu
            Cookie clicker.
          </p>
          <img src="../Croissant.png" alt="croissantLogo" />
        </article>
      </a>
      <a href="https://github.com/FabienRollet/Nebula" target="_blank">
        <article className="projet">
          <h3>Nebula</h3>
          <p>
            Projet en équipe de 3 semaines en React et SCSS avec utilisation
            d’une API.
          </p>
          <img src="../nebula.jpg" alt="NebulaLogo" />
        </article>
      </a>
      <a href="https://github.com/Phil-BENISSAN/0224-protojam-hellfire" target="_blank">
        <article className="projet">
          <h3>Senior Sanctuary</h3>
          <p>
            “Hackathon” de 48h pour créer un projet en collaboration avec une
            équipe de data.
          </p>
          <img src="../senior.svg" alt="SeniorLogo" />
        </article>
      </a>
      <a
        href="https://github.com/WildCodeSchool-2024-02/JS-bdx-0224-P3-Origin_digital"
        target="_blank"
      >
        <article className="projet">
          <h3>SweatStream</h3>
          <p>Projet de 6 semaine FullStack avec tailwindCSS et MySQL.</p>
          <img src="../banner.jpg" alt="SweatStreamLogo" />
        </article>
      </a>
      <a
        href="https://github.com/Phil-BENISSAN/0224-hackathon-team2-bis"
        target="_blank"
      >
        <article className="projet">
          <h3>Hackathon</h3>
          <p>
            Hackathon de 72h avec data et designer, sujet commun à toutes les
            promos de France pour un client.
          </p>
          <img
            src="https://cdn-icons-png.freepik.com/512/3885/3885388.png"
            alt="HackathonLogo"
          />
        </article>
      </a>
      <a href="https://www.educagriff.com/" target="_blank">
        <article className="projet">
          <h3>Educagriff</h3>
          <p>
            Réalisation autonome pour un client d’un site vitrine en Next.js
            avec une interface admin.
          </p>
          <img src="../EducagriffLogo.png" alt="EducagriffLogo" />
        </article>
      </a>
      <a href="https://www.kenizimed.com/" target="_blank">
        <article className="projet">
          <h3>Kenizimed</h3>
          <p>
            Site marchand sur Next.js, sans template. Gestion du panier, du paiement via stripe, envoie de mails.
          </p>
          <img
            className="circle"
            src="../kenizimedLogo.png"
            alt="kenizimedLogo"
          />
        </article>
      </a>
    </section>
  );
}
