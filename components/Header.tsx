"use client";

import clsx from "clsx";
import { useState } from "react";
import styles from "./Header.module.scss";
import { Locale, Messages, supportedLocales } from "@/util/i18n";
import type { PersonContent } from "@/content/people/types";
import React from "react";

export default function Header({
  messages,
  locale,
  person,
}: {
  messages: Messages;
  locale: Locale;
  person: PersonContent;
}) {
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const hasExperience = Boolean(person.experience?.length);
  const hasEducation = Boolean(person.education?.length);
  const hasProjects = Boolean(person.projects?.length);
  const hasSkills = Boolean(person.skills?.length) && Boolean(person.skillCategories);
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
          {hasExperience ? (
            <li>
              <a href="#experience" onClick={() => setMobileMenuOpened(false)}>
                {messages.header.sections.experience}
              </a>
            </li>
          ) : null}
          {hasEducation ? (
            <li>
              <a href="#education" onClick={() => setMobileMenuOpened(false)}>
                {messages.header.sections.education}
              </a>
            </li>
          ) : null}
          {hasProjects ? (
            <li>
              <a href="#projects" onClick={() => setMobileMenuOpened(false)}>
                {messages.header.sections.projects}
              </a>
            </li>
          ) : null}
          {hasSkills ? (
            <li>
              <a href="#skills" onClick={() => setMobileMenuOpened(false)}>
                {messages.header.sections.skills}
              </a>
            </li>
          ) : null}
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
