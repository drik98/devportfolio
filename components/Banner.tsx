import { Locale, Messages } from "@/util/i18n";
import type { PersonContent } from "@/content/people/types";
import styles from "./Banner.module.scss";

export default function Banner({
  messages,
  locale,
  person,
}: {
  messages: Messages;
  locale: Locale;
  person: PersonContent;
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>{person.about.name}</h1>
        <h2>{messages.banner.jobTitle}</h2>
        <a
          href={`/cv_${person.cvFileBase}_${locale}.pdf`}
          download={`cv-${person.cvFileBase}-${locale}.pdf`}
        >
          {messages.banner.downloadCv}
        </a>
      </div>

      <div className={styles.bannerOverlay}></div>

      <a className={styles.bannerScrollDown} href="#about">
        <span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </span>
      </a>
    </div>
  );
}
