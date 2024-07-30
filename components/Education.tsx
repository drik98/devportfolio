import styles from "./Education.module.scss";

import fhAachenLogo from "@/images/education/fhaachen.jpg";
import wzlLogo from "@/images/experience/wzl.png";
import DetailedItem from "./DetailedItem";

export default function Education() {
  return (
    <div id="education" className={styles.education}>
      <h2 className="heading">Ausbildung</h2>

      <DetailedItem
        educator="Fachhochschule Aachen"
        keyPoints={[
          "Thesis-Thema: Entwicklung von Bewertungsansätzen für ausgewählte Process Mining Algorithmen in der Auftragsabwicklung",
        ]}
        image={fhAachenLogo}
        startDate={new Date("2016-09-01")}
        endDate={new Date("2020-08-31")}
        title="Bachelor of Science in Scientific Programming"
        url="https://www.fh-aachen.de/"
        showDateRange
      />

      <DetailedItem
        educator="Fachhochschule Aachen"
        keyPoints={[
          "Entwicklung von Java-Webanwendungen für industrielle Anwendungen, mit Schwerpunkt auf Frontend-Entwicklung von Software- Demonstratoren in Industrie 4.0",
          "Nutzung von Technologien wie JavaScript, HTML, CSS, Java, PostgreSQL und Hibernate",
          "Erfassung von Anforderungen und Konzeption von Anwendungen",
          "Betreuung von Auszubildenden",
        ]}
        image={wzlLogo}
        startDate={new Date("2016-09-01")}
        endDate={new Date("2019-08-31")}
        title="Ausbildung zum Mathematisch-technischem Softwareentwickler"
        url="https://www.wzl.rwth-aachen.de/"
        showDateRange
      />
    </div>
  );
}
