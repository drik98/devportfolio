import { Messages } from "@/util/i18n";
import styles from "./Contact.module.scss";

export default function Contact({ messages }: { messages: Messages }) {
  return (
    <div id="contact" className={styles.contact}>
      <h2>{messages.header.sections.contact}</h2>
      <div className={styles.contactForm}>
        <form method="POST" action="https://formspree.io/bewerbung@smtz.dev">
          <input
            type="hidden"
            name="_subject"
            value={messages.contact.emailSubject}
          />
          <input
            type="email"
            name="_replyto"
            placeholder={messages.contact.email}
            required
          />
          <textarea
            name="message"
            placeholder={messages.contact.message}
            required
          ></textarea>
          <button type="submit">{messages.contact.submit}</button>
        </form>
      </div>
    </div>
  );
}
