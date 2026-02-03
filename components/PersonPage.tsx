import type { CSSProperties } from "react";
import { Locale, Messages } from "@/util/i18n";
import type { PersonContent } from "@/content/people/types";

import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function PersonPage({
  person,
  locale,
  messages,
}: {
  person: PersonContent;
  locale: Locale;
  messages: Messages;
}) {
  const themeVars = {
    "--theme-primary": person.theme.primary,
    "--theme-primary-light": person.theme.primaryLight,
    "--theme-primary-dark": person.theme.primaryDark,
    "--theme-primary-darker": person.theme.primaryDarker,
    "--theme-primary-rgb": person.theme.primaryRgb,
    "--theme-banner-overlay": person.theme.bannerOverlay,
    "--theme-banner-bg": `url(${person.theme.bannerBackground})`,
  } as CSSProperties;

  return (
    <div style={themeVars}>
      <Header messages={messages} locale={locale} />
      <Banner messages={messages} locale={locale} person={person} />
      <About
        messages={messages}
        locale={locale}
        about={person.about}
        experience={person.experience}
        profileImage={person.profileImage}
      />
      <Experience
        messages={messages}
        locale={locale}
        experience={person.experience}
      />
      <Education
        messages={messages}
        locale={locale}
        education={person.education}
      />
      <Projects messages={messages} locale={locale} projects={person.projects} />
      <Skills
        messages={messages}
        locale={locale}
        skills={person.skills}
        skillCategories={person.skillCategories}
      />
      <Contact messages={messages} formAction={person.contact.formAction} />
      <Footer about={person.about} />
    </div>
  );
}
