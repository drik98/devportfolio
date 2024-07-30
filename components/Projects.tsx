import { StaticImageData } from 'next/image';
import Image from 'next-export-optimize-images/image';
import styles from "./Projects.module.scss";

import aixperantoPreview from "@/images/projects/aixperanto.jpg";
import cookbookPreview from "@/images/projects/cookbook.png";
import devExtremeLogo from "@/images/technologies/devextreme.png";
import gatsbyLogo from "@/images/technologies/gatsby.svg";
import gridsomeLogo from "@/images/technologies/gridsome.svg";
import issueTransitionsPreview from "@/images/projects/issue-transitions.png";

import javaLogo from "@/images/technologies/java.png";
import javascriptCssHtmlLogo from "@/images/technologies/javascript-css-html.png";
import motorsportCalendar from "@/images/projects/motorsportcalendar.png";
import netlifyLogo from "@/images/technologies/netlify.png";
import nuxtLogo from "@/images/technologies/nuxt.svg";
import optiwoPreview from "@/images/projects/optiwo.jpg";

import reactLogo from "@/images/technologies/react.png";
import sieweddingPreview from "@/images/projects/siewedding.png";
import storybookLogo from "@/images/technologies/storybook.png";
import vbaLogo from "@/images/technologies/vba.jpg";
import visioLogo from "@/images/technologies/visio.png";
import vueLogo from "@/images/technologies/vue.png";

export default function Projects() {
  return (
    <div id="projects" className={`background-alt ${styles.projects}`}>
      <h2 className="heading">Projekte</h2>
      <div className="container">
        <div className="row">
          <ProjectItem
            description="Anlässlicher meiner Hochzeit habe ich nach einer Möglichkeit gesucht die Gäste bezüglich Location, Agenda, Dresscode, etc. zu informieren. Deswegen habe ich mich kurzerhand dazu entschlossen eine kleine Website zu erstelle, die ich mittels Nuxt und static generation erstellt habe."
            title="Hochzeits Website"
            image={sieweddingPreview}
            projectUrl="https://siewedding.netlify.app/"
            technologies={[
              {
                image: vueLogo,
                name: "vue.js",
                url: "https://vuejs.org/",
              },
              {
                image: nuxtLogo,
                name: "NuxtJS",
                url: "https://nuxt.com/",
              },
              {
                image: netlifyLogo,
                name: "netlify",
                url: "https://www.netlify.com/",
              },
            ]}
          />

          <ProjectItem
            description="Auf der Suche nach einer eleganten und praktischen Lösung zum Sichern und Anzeigen meiner Rezepte ist dieses Projekt entstanden. Dazu habe ich das bereits bestehende HTML-Template benutzt und zusammen mit gatsby und React eine Applikation geschrieben, die aus YAML-Dateien die Rezept-Seiten generieren kann. Bei dem Projekt handelt es sich um mein erstes React-Projekt."
            title="Mein Kochbuch"
            image={cookbookPreview}
            projectUrl="https://cookbook.smtz.dev/"
            technologies={[
              {
                image: reactLogo,
                name: "React",
                url: "https://reactjs.org/",
              },
              {
                image: gatsbyLogo,
                name: "Gatsby",
                url: "https://www.gatsbyjs.org/",
              },
              {
                image: netlifyLogo,
                name: "netlify",
                url: "https://www.netlify.com/",
              },
            ]}
          />

          <ProjectItem
            description="Bei einem Sprint-Review kam mir der Gedanke, dass es eine schönere Art und Weise geben muss, den Verlauf von Jira-Issues vom Beginn bis zum Ende des Sprints zu visualisieren, als in einer langweiligen Excel-Tabelle. Deshalb habe ich mich für ein Sankey-Diagramm entschieden, weil es den Mengenflus grafisch sehr schön darstellen kann. Als Entwickler möchte ich das natürlich nicht jedes Mal manuell machen müssen, also habe ich beschlossen, den Prozess zu automatisieren."
            title="Issue Transitions Sankey Chart Generator"
            image={issueTransitionsPreview}
            projectUrl="https://issue-transitions.smtz.dev/"
            technologies={[
              {
                image: vueLogo,
                name: "vue.js",
                url: "https://vuejs.org/",
              },
              {
                image: devExtremeLogo,
                name: "DevExpress",
                url: "https://js.devexpress.com/",
              },
              {
                image: netlifyLogo,
                name: "netlify",
                url: "https://www.netlify.com/",
              },
            ]}
          />

          <ProjectItem
            description="Da bei den vielen Rennen oft der Überblick verloren geht, haben meine Freunde und ich alle Rennen gemeinsam in einer Google Sheets Datei gesammelt. Damit wir einen funktionalen Überblick über die aktuellen Rennen haben, ist hiermit mein erstes vue.js-Projekt entstanden. Beim Build werden die Daten aus der Google Sheets Datei gezogen und mittels Gridsome die statischen Seiten generiert und über Netlify deployed. Durch einen Build Hook bleiben die Daten immer aktuell."
            image={motorsportCalendar}
            title="Motorsportkalender"
            projectUrl="https://motorsport-calendar.smtz.dev/"
            technologies={[
              {
                image: vueLogo,
                name: "vue.js",
                url: "https://vuejs.org/",
              },
              {
                image: gridsomeLogo,
                name: "Gridsome",
                url: "https://gridsome.org/",
              },
              {
                image: netlifyLogo,
                name: "netlify",
                url: "https://www.netlify.com/",
              },
            ]}
          />

          <ProjectItem
            description="Diese Webanwendung ist der Nachfolger vom vue/gridsome-basierten Motorsportkalender. Obwohl Gridsome zum Zeitpunkt der Erstellung ein praktisches Tool war, konnte es wird es wohl leider nicht auf vue 3 migriert. Da ich die Anwendung aber weiter entwickeln wollte mit vue 3 und typescript, habe mich entschieden das Projekt mit nuxt wiederzubeleben. Das bietet mir auch eine Chance an zu sehen, wie ich mich selbst seit der Erstellung des ersten Motorsportkalenders weiterentwickelt habe. Das Projekt ist noch work in progress, kann aber trotzdem schon mal angesehen werden."
            image={motorsportCalendar}
            title="Motorsportkalender 2.0"
            sourceCodeUrl="https://github.com/drik98/motorsport-calendar-nuxt-3"
            technologies={[
              {
                image: vueLogo,
                name: "vue.js",
                url: "https://vuejs.org/",
              },
              {
                image: nuxtLogo,
                name: "NuxtJS",
                url: "https://nuxt.com/",
              },
              {
                image: storybookLogo,
                name: "Storybook",
                url: "https://storybook.js.org/",
              },
              {
                image: netlifyLogo,
                name: "netlify",
                url: "https://www.netlify.com/",
              },
            ]}
          />

          <ProjectItem
            description="Bei Aixperanto handelt es sich um eine Applikation zur Darstellung von Prozessen mittels der gleichnamigen Prozessmodellierungssprache aixperanto. Das Programm habe ich im ersten Jahr meiner Ausbildung am WZL in der Programmiersprache VBA für das Office Programm Microsoft Visio geschrieben. Dabei liest das Programm die Informationen der einzelnen Prozessschritte und deren Verbindungen aus und platziert diese automatisch in den zugehörigen Swimlanes."
            title="Aixperanto"
            image={aixperantoPreview}
            projectUrl="http://www.aixperanto.de/"
            technologies={[
              {
                image: vbaLogo,
                name: "Visual Basic for Applications",
                url: "https://docs.microsoft.com/de-de/office/vba/api/overview/",
              },
              {
                image: visioLogo,
                name: "Microsoft Visio",
                url: "https://www.microsoft.com/de-de/microsoft-365/visio/flowchart-software",
              },
            ]}
          />

          <ProjectItem
            description="Bei dem Projekt OptiWo handelt es sich um eine Webanwendung mit Java-Backend. OptiWo bietet eine datenbasierte Unterstützung bei der Gestaltung globaler Produktionsnetzwerke. Bei OptiWo habe ich während dem dritten Ausbildungsjahr am WZL mit entwickelt. Dabei habe ich hauptsächlich das Design angepasst und die verschiedenen Views weiterentwickelt."
            title="OptiWo"
            image={optiwoPreview}
            projectUrl="https://optiwo.de/"
            technologies={[
              {
                image: javaLogo,
                name: "Java",
                url: "https://www.java.com/",
              },
              {
                image: javascriptCssHtmlLogo,
                name: "Javascript Css Html5",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

interface Technology {
  url: string;
  image: StaticImageData;
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
  image: StaticImageData;
  projectUrl?: string;
  sourceCodeUrl?: string;
  technologies: Technology[];
  title: string;
}) {
  return (
    <div className={`shadow-large ${styles.project}`}>
      <div className={styles.projectImage}>
        <Image src={image} alt={`Preview of ${title} project`} />
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
      <Image
        className={styles.projectLogoImage}
        src={image}
        alt={`Logo of ${name}`}
        title={name}
      />
    </a>
  );
}
