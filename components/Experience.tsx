import { StaticImageData } from 'next/image';
import styles from "./Experience.module.scss";

import itemisLogo from "@/images/experience/itemis.svg";
import wzlLogo from "@/images/experience/wzl.png";
import aixigoLogo from "@/images/experience/aixigo.svg";
import { formatDateRange } from "@/util/date-time";
import DetailedItem from "./DetailedItem";

export default function ExperienceTimeline() {
  return (
    <div id="experience" className={`background-alt ${styles.experience}`}>
      <h2 className="heading">Beruflicher Werdegang</h2>
      <div className={styles.experienceTimeline}>
        <ExperienceTimelineItem
          company="itemis AG"
          url="https://www.itemis.com/"
          startDate={new Date("2023-12-01")}
          title="Senior Software Engineer"
          image={itemisLogo}
          keyPoints={[
            "Schlüsselrolle bei der Gestaltung der Threat Analysis and Risk Assessment (TARA) durch itemis SECURE, mit dem Ziel der strikten Einhaltung der ISO 21434 Standards",
            "Vorantreiben der Mission, TARA mit einem benutzerfreundlichen Ansatz unter Verwendung von Vue.js in Verbindung mit modelix ins Web zu bringen",
            "Durchsetzung hoher Qualitätsstandards für Clean Code und Best Practices in der Softwareentwicklung",
            "Weiterentwicklung des Tech-Stacks durch die Einführung neuer und fortschrittlicher Technologien",
            "Verbesserung der Entwicklungserfahrung durch die Optimierung von Workflows",
            "Entwicklung von APIs und Etablierung der Kommunikation zwischen Diensten mit Kotlin",
          ]}
        />

        <ExperienceTimelineItem
          company="aixigo AG"
          url="https://www.aixigo.com/"
          startDate={new Date("2020-12-01")}
          endDate={new Date("2023-11-30")}
          title="Software Engineer"
          image={aixigoLogo}
          keyPoints={[
            "Leitung der Entwicklung von Micro Frontends, hauptsächlich unter Verwendung von Vue.js",
            "Federführung bei der Entwicklung und Konzeption von Fintech-Microservices mit Vue.js und Java EE",
            "Zentrale Rolle bei der Modernisierung des Tech-Stacks durch die Einführung von TypeScript und Storybook",
            "Einsatz für hochwertige Softwareentwicklung und Betonung von Clean Code",
            "Aktive Mitwirkung an der Verbesserung des CI/CD-Prozesses",
            "Verantwortung für die Einarbeitung neuer Teammitglieder, Bereitstellung von Anleitung und Coaching für eine reibungslose Integration",
            "Teilnahme an einem Mentorenprogramm, um sich als Führungskraft weiterzuentwickeln",
          ]}
        />

        <ExperienceTimelineItem
          company="Werkzeugmaschinenlabor WZL der RWTH Aachen"
          url="https://www.wzl.rwth-aachen.de/"
          startDate={new Date("2019-10-01")}
          endDate={new Date("2020-11-30")}
          title="Software Engineer (Studentische Hilfskraft)"
          image={wzlLogo}
          keyPoints={[
            "Förderung der Modernisierung des Tech-Stacks durch Proof of Concepts und die Einführung von Frameworks wie Vue.js und Spring Boot",
            "Etablierung eines standardisierten CI/CD-Prozesses",
            "Einarbeitung, Unterstützung und Mentoring für neue Auszubildende und Kollegen",
          ]}
        />
      </div>
    </div>
  );
}

function ExperienceTimelineItem({
  startDate,
  endDate,
  url,
  image,
  company,
  title,
  keyPoints,
}: {
  startDate: Date;
  endDate?: Date;
  url?: string;
  image: StaticImageData;
  company: string;
  title: string;
  keyPoints: string[];
}) {
  return (
    <div className={styles.experienceTimelinePoint}>
      <div className={styles.experienceTimelineIcon}>
        <i className="fa fa-map-marker"></i>
      </div>
      <div>
        <span className={styles.experienceTimelineDate}>
          {formatDateRange(startDate, endDate)}
        </span>
        <DetailedItem
          className={styles.experienceTimelineContent}
          educator={company}
          keyPoints={keyPoints}
          image={image}
          title={title}
          url={url}
        />
      </div>
    </div>
  );
}
