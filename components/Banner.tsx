import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>Hendrik Schmitz</h1>
        <h2>Software Engineer</h2>
        <a href="/cv_hendrik_schmitz_de.pdf" download="cv-hendrik-schmitz.pdf">
          Download CV
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
