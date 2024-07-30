import styles from "./Footer.module.scss";

const currentYear = new Date().getFullYear();

export default 
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={`col-sm-5 ${styles.copyright}`}>
            <p>Copyright &copy; {currentYear} Hendrik Schmitz</p>
          </div>
          <div className={`col-sm-2 ${styles.top}`}>
            <a id="to-top" href="#">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </a>
          </div>
          <div className={`col-sm-5 ${styles.social}`}>
            <ul>
              <li>
                <a
                  href="https://github.com/drik98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hendriksmtz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.xing.com/profile/Hendrik_Schmitz29"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-xing" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}