export default function Projets() {
  return (
    <section className="bg-primary-color p-3 projetitle">
      <h2>Mes projets !</h2>
      <a href="https://fabienrollet.github.io/P1_clicker.github.io/" target="_blank">
        <article className="projet">
          <h3>Croissant clicker</h3>
          <p>
            Projet en équipe de 2 semaines en HTML, CSS et JS, basé sur le jeu
            Cookie clicker.
          </p>
          <img src="../Croissant.png" alt="croissantLogo" />
        </article>
      </a>
      <a href="https://nebula-project.vercel.app/" target="_blank">
        <article className="projet">
          <h3>Nebula</h3>
          <p>
            Projet en équipe de 3 semaines en React et SCSS avec utilisation
            d’une API.
          </p>
          <img src="../nebula.jpg" alt="NebulaLogo" />
        </article>
      </a>
      <a href="https://senior-sanctuary.webflow.io/" target="_blank">
        <article className="projet">
          <h3>Senior Sanctuary</h3>
          <p>
            “Hackathon” de 48h pour créer un projet en collaboration avec une
            équipe de data.
          </p>
          <img src="../senior.svg" alt="SeniorLogo" />
        </article>
      </a>
      <a href="https://github.com/WildCodeSchool-2024-02/JS-bdx-0224-P3-Origin_digital" target="_blank">
        <article className="projet">
          <h3>SweatStream</h3>
          <p>
            Projet de 6 semaine FullStack avec tailwindCSS et MySQL.
          </p>
          <img src="../banner.jpg" alt="SweatStreamLogo" />
        </article>
      </a>
      <a href="https://github.com/Phil-BENISSAN/0224-hackathon-team2-bis" target="_blank">
        <article className="projet">
          <h3>Hackathon</h3>
          <p>
            Hackathon de 72h avec data et designer, sujet commun à toutes les
            promos de France pour un client. Thème de l'inclusivité dans l'emploi.
          </p>
          <img src="https://cdn-icons-png.freepik.com/512/3885/3885388.png" alt="HackathonLogo" />
        </article>
      </a>
      <a href="https://les-devs-juniors.vercel.app/" target="_blank">
        <article className="projet">
          <h3>Les devs juniors</h3>
          <p>
           Collectif de jeune développeurs qui propose la création de site
           vitrine pour des particuliers. Applications en Next.js et Typescript.
          </p>
          <img src="https://les-devs-juniors.vercel.app/images/bachelor-cap.png" alt="LesdevsJuniorsLogo" />
        </article>
      </a>
    </section>
  );
}
