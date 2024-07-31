"use client";

import clsx from "clsx";
import { useState } from "react";
import styles from "./Header.module.scss";
import { Locale, supportedLocales } from "@/util/i18n";
import React from "react";

export default function Header({
  messages,
  locale,
}: {
  messages: any;
  locale: Locale;
}) {
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
          [styles.header]: true,
        })}
      >
        <div
          className={styles.mobileMenuClose}
          onClick={() => setMobileMenuOpened(false)}
        >
          <span>{messages.header.close}</span>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#about" onClick={() => setMobileMenuOpened(false)}>
              {messages.header.sections.about}
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMobileMenuOpened(false)}>
              {messages.header.sections.experience}
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setMobileMenuOpened(false)}>
              {messages.header.sections.education}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMobileMenuOpened(false)}>
              {messages.header.sections.projects}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMobileMenuOpened(false)}>
              {messages.header.sections.skills}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMobileMenuOpened(false)}>
              {messages.header.sections.contact}
            </a>
          </li>
          <li>
            <span className={styles.localeLinkContainer}>
              {supportedLocales.map((supportedLocale, index, array) => (
                <React.Fragment key={supportedLocale}>
                  <a
                    className={clsx({
                      [styles.localeLink]: true,
                      [styles.disabledLink]: supportedLocale === locale,
                    })}
                    href={`/${supportedLocale}`}
                  >
                    {supportedLocale}
                  </a>
                  {index !== array.length - 1 ? (
                    <span className={styles.localeLinkSeparator}>|</span>
                  ) : null}
                </React.Fragment>
              ))}
            </span>
          </li>
        </ul>
      </header>
    </>
  );
}
