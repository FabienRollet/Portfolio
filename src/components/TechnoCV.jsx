export default function TechnoCV() {
  return (
    <section className="bg-secondary-color p-8 techno">
      <h2 className="technotitle">Technologie & CV</h2>
      <section className="front">
        <h3>Front-end</h3>
        <ul>
          <article>
            <img src="../react.png" alt="" />
            <li>React</li>
          </article>
          <article>
            <img src="../js.png" alt="" />
            <li>JavaScript</li>
          </article>
          <article>
            <img src="../htmlcss.png" alt="" />
            <li>Html/CSS</li>
          </article>
          <article>
            <img src="../tailwind.png" alt="" />
            <li>Tailwind</li>
          </article>
        </ul>
      </section>
      <section className="back">
        <h3>Back-end</h3>
        <ul>
          <article>
            <img src="../express.png" alt="" />
            <li>ExpressJs</li>
          </article>
          <article>
            <img src="../mysql.png" alt="" />
            <li>MySQL</li>
          </article>
          <article>
            <img src="../node.png" alt="" />
            <li>Node.js</li>
          </article>
        </ul>
      </section>
      <section className="soft">
        <h3>Soft skills</h3>
        <ul>
          <li>Inventif</li>
          <li>Méthodes agiles</li>
          <li>Curieux</li>
          <li>Calme</li>
          <li>Autonome</li>
          <li>Méthodique</li>
        </ul>
      </section>
      <a href="../CV DEV.pdf" download="CV Rollet Fabien" className="cv">
        Téléchargez mon CV !
      </a>
    </section>
  );
}
