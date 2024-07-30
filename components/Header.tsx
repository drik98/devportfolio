"use client";

import clsx from "clsx";
import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <>
      <div
        className={`shadow-large ${styles.mobileMenuOpen}`}
        onClick={() => setMobileMenuOpened(true)}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header
        className={clsx({
          [styles.headerActive]: isMobileMenuOpened,
          [styles.header]: true
        })}
      >
        <div className={styles.mobileMenuClose} onClick={() => setMobileMenuOpened(false)}>
          <span>Schließen</span>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#about" onClick={() => setMobileMenuOpened(false)}>
              Über mich
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMobileMenuOpened(false)}>
              Beruflicher Werdegang
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setMobileMenuOpened(false)}>
              Ausbildung
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMobileMenuOpened(false)}>
              Projekte
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMobileMenuOpened(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMobileMenuOpened(false)}>
              Kontakt
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
