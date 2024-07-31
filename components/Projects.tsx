import { StaticImageData } from "next/image";
import Image from "next-export-optimize-images/image";
import projects from "@/content/projects.json";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div id="projects" className={`background-alt ${styles.projects}`}>
      <h2 className="heading">Projekte</h2>
      <div className="container">
        <div className="row">{projects.map(ProjectItem)}</div>
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
}: {
  description: string;
  image: StaticImageData | string;
  projectUrl?: string;
  sourceCodeUrl?: string;
  technologies: Technology[];
  title: string;
}) {
  return (
    <div className={`shadow-large ${styles.project}`} key={title}>
      <div className={styles.projectImage}>
        {typeof image === "string" ? (
          <img src={image} alt={`Preview of ${title} project`} />
        ) : (
          <Image src={image} alt={`Preview of ${title} project`} />
        )}
      </div>

      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Technologies technologies={technologies} />
        {projectUrl ? (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-external-link"></i>
            Projekt ansehen
          </a>
        ) : null}
        {sourceCodeUrl ? (
          <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-code"></i>
            Code ansehen
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Technologies({ technologies }: { technologies: Technology[] }) {
  return (
    <div className={styles.projectLogos}>
      {technologies.map(TechnologyItem)}
    </div>
  );
}

function TechnologyItem({ url, image, name }: Technology) {
  return (
    <a className={styles.projectLogoLink} href={url} key={name} target="_blank">
      {typeof image === "string" ? (
        <img
          className={styles.projectLogoImage}
          src={image}
          alt={`Logo of ${name}`}
          title={name}
        />
      ) : (
        <Image
          className={styles.projectLogoImage}
          src={image}
          alt={`Logo of ${name}`}
          title={name}
        />
      )}
    </a>
  );
}
