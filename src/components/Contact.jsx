export default function Contact() {
  const webhookURL =
    "https://discord.com/api/webhooks/1244747339307028643/czbq1qubwAsiVZNGXqS-Hb1oP61ZlwajpX_dS5Si3lFRUJdAX3gITn2M69jf3PZA4vBJ";

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const email = emailInput.value;
    const message = messageInput.value;

    const payload = {
      content: `Nouveau message du portfolio :\nAdresse email: ${email}\nMessage: ${message}`,
    };

    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message envoyé avec succès !");
          emailInput.value = "";
          messageInput.value = "";
        } else {
          alert("Une erreur est survenue.");
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Une erreur est survenue.");
      });
  };

  return (
    <footer className="bg-primary-color p-8">
      <h2 className="contact">Contactez-moi</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <section className="email">
          <label htmlFor="email">Adresse email :</label>
          <input type="email" id="email" placeholder="Tapez ici..." required />
        </section>
        <section className="message">
          <label htmlFor="message">Message :</label>
          <textarea id="message" placeholder="Tapez ici..." required />
        </section>
        <input type="submit" className="send" />
      </form>
      <section className="link">
        <h3>Mes réseaux</h3>
        <a href="https://github.com/FabienRollet" target="_blank">
          <img src="../github.svg" alt="logo" />
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/fabien-rollet-ab69392a7/"
          target="_blank"
        >
          <img src="../linkedin.svg" alt="logo" />
          <p>Linkedin</p>
        </a>
      </section>
    </footer>
  );
}
