import styles from "./Projects.module.scss";
import {
  Locale,
  MaybeMultilingualString,
  Messages,
  getMultilingualContent,
} from "@/util/i18n";
import type { ProjectContent, ProjectTechnology } from "@/content/people/types";

export default function Projects({
  messages,
  locale,
  projects,
}: {
  messages: Messages;
  locale: Locale;
  projects: ReadonlyArray<ProjectContent>;
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

type Technology = ProjectTechnology;

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
  description: MaybeMultilingualString;
  image: string;
  projectUrl?: string;
  sourceCodeUrl?: string;
  technologies: ReadonlyArray<Technology>;
  title: MaybeMultilingualString;
  messages: Messages;
  locale: Locale;
}) {
  const translatedTitle = getMultilingualContent(title, locale);
  return (
    <div className={`shadow-large ${styles.project}`} key={translatedTitle}>
      <div className={styles.projectImage}>
        <img
          src={image}
          alt={messages.projects.altTextOfProjectPreview.replace(
            "{project}",
            translatedTitle
          )}
        />
      </div>

      <div className={styles.projectInfo}>
        <h3>{translatedTitle}</h3>
        <p>{getMultilingualContent(description, locale)}</p>
        <Technologies technologies={technologies} messages={messages} />
        <span>
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
        </span>
      </div>
    </div>
  );
}

function Technologies({
  technologies,
  messages,
}: {
  technologies: ReadonlyArray<Technology>;
  messages: Messages;
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
}: Technology & { messages: Messages }) {
  return (
    <a className={styles.projectLogoLink} href={url} key={name} target="_blank">
      <img
        className={styles.projectLogoImage}
        src={image}
        alt={messages.projects.altTextOfTechnologyLogo.replace(
          "{technology}",
          name
        )}
        title={name}
      />
    </a>
  );
}
