export default function TechnoCV() {
  return (
    <section className="bg-secondary-color p-8 techno">
      <h2 className="technotitle">Technologies & CV</h2>
      <article className="front">
        <h3>Front-end</h3>
        <ul>
          <li>
            <img src="../react.png" alt="" />
            <p>React</p>
          </li>
          <li>
            <img src="../js.png" alt="" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src="../htmlcss.png" alt="" />
            <p>Html/CSS</p>
          </li>
          <li>
            <img src="../tailwind.png" alt="" />
            <p>Tailwind</p>
          </li>
          <li>
            <img src="../next.png" alt="" />
            <p>Next.js</p>
          </li>
        </ul>
      </article>
      <article className="back">
        <h3>Back-end</h3>
        <ul>
          <li>
            <img src="../express.png" alt="" />
            <p>ExpressJs</p>
          </li>
          <li>
            <img src="../mysql.png" alt="" />
            <p>MySQL</p>
          </li>
          <li>
            <img src="../node.png" alt="" />
            <p>Node.js</p>
          </li>
          <li>
            <img src="../postgre.png" alt="" />
            <p>Postgre</p>
          </li>
        </ul>
      </article>
      <article className="soft">
        <h3>Soft skills</h3>
        <ul>
          <li>Inventif</li>
          <li>Méthodes agiles</li>
          <li>Curieux</li>
          <li>Calme</li>
          <li>Autonome</li>
          <li>Méthodique</li>
        </ul>
      </article>
      <a
        href="../CV Rollet Fabien.pdf"
        download="CV Rollet Fabien"
        className="cv"
      >
        Téléchargez mon CV !
      </a>
    </section>
  );
}
