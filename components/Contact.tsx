import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <h2>Kontakt</h2>
      <div className={styles.contactForm}>
        <form method="POST" action="https://formspree.io/bewerbung@smtz.dev">
          <input
            type="hidden"
            name="_subject"
            value="Kontaktanfrage via Portfolio"
          />
          <input type="email" name="_replyto" placeholder="E-Mail" required />
          <textarea name="message" placeholder="Nachricht" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
