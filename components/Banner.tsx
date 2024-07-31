import { Locale, Messages } from "@/util/i18n";
import styles from "./Banner.module.scss";

export default function Banner({
  messages,
  locale,
}: {
  messages: Messages;
  locale: Locale;
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Hendrik Schmitz</h1>
        <h2>{messages.banner.jobTitle}</h2>
        <a
          href={`/cv_hendrik_schmitz_${locale}.pdf`}
          download="cv-hendrik-schmitz.pdf"
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
