import { StaticImageData } from "next/image";
import Image from "next-export-optimize-images/image";
import projects from "@/content/projects.json";
import styles from "./Projects.module.scss";
import {
  Locale,
  MultilingualString,
  getMultilingualContent,
} from "@/util/i18n";

export default function Projects({
  messages,
  locale,
}: {
  messages: any;
  locale: Locale;
}) {
  return (
    <div id="projects" className={`background-alt ${styles.projects}`}>
      <h2 className="heading">{messages.header.sections.projects}</h2>
      <div className="container">
        <div className="row">
          {projects.map((project) =>
            ProjectItem({ ...project, messages, locale })
          )}
        </div>
      </div>
    </div>
  );
}

interface Technology {
  url: string;
  image: StaticImageData | string;
  name: string;
}

function ProjectItem({
  description,
  image,
  projectUrl,
  sourceCodeUrl,
  technologies,
  title,
  messages,
  locale,
}: {
  description: MultilingualString;
  image: StaticImageData | string;
  projectUrl?: string;
  sourceCodeUrl?: string;
  technologies: Technology[];
  title: MultilingualString;
  messages: any;
  locale: Locale;
}) {
  const translatedTitle = getMultilingualContent(title, locale);
  return (
    <div className={`shadow-large ${styles.project}`} key={translatedTitle}>
      <div className={styles.projectImage}>
        {typeof image === "string" ? (
          <img
            src={image}
            alt={messages.projects.altTextOfProjectPreview.replace(
              "{project}",
              title
            )}
          />
        ) : (
          <Image
            src={image}
            alt={messages.projects.altTextOfProjectPreview.replace(
              "{project}",
              title
            )}
          />
        )}
      </div>

      <div className={styles.projectInfo}>
        <h3>{translatedTitle}</h3>
        <p>{getMultilingualContent(description, locale)}</p>
        <Technologies technologies={technologies} messages={messages} />
        {projectUrl ? (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-external-link"></i>
            {messages.projects.viewProject}
          </a>
        ) : null}
        {sourceCodeUrl ? (
          <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-code"></i>
            {messages.projects.viewCode}
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Technologies({
  technologies,
  messages,
}: {
  technologies: Technology[];
  messages: any;
}) {
  return (
    <div className={styles.projectLogos}>
      {technologies.map((technology) =>
        TechnologyItem({ ...technology, messages })
      )}
    </div>
  );
}

function TechnologyItem({
  url,
  image,
  name,
  messages,
}: Technology & { messages: any }) {
  return (
    <a className={styles.projectLogoLink} href={url} key={name} target="_blank">
      {typeof image === "string" ? (
        <img
          className={styles.projectLogoImage}
          src={image}
          alt={messages.projects.altTextOfTechnologyLogo.replace(
            "{technology}",
            name
          )}
          title={name}
        />
      ) : (
        <Image
          className={styles.projectLogoImage}
          src={image}
          alt={messages.projects.altTextOfTechnologyLogo.replace(
            "{technology}",
            name
          )}
          title={name}
        />
      )}
    </a>
  );
}
