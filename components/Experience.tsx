import { StaticImageData } from "next/image";
import DetailedItem from "@/components/DetailedItem";
import rawExperience from "@/content/experience.json";
import { formatDateRange } from "@/util/date-time";
import styles from "./Experience.module.scss";

const experiences: ExperienceItem[] = rawExperience.map((experience) => ({
  company: experience.company,
  image: experience.image,
  keyPoints: experience.keyPoints,
  startDate: new Date(experience.startDate),
  title: experience.title,
  endDate: experience.endDate ? new Date(experience.endDate) : undefined,
  url: experience.url,
}));

export default function ExperienceTimeline() {
  return (
    <div id="experience" className={`background-alt ${styles.experience}`}>
      <h2 className="heading">Beruflicher Werdegang</h2>
      <div className={styles.experienceTimeline}>
        {experiences.map(ExperienceTimelineItem)}
      </div>
    </div>
  );
}

interface ExperienceItem {
  startDate: Date;
  endDate?: Date;
  url?: string;
  image: StaticImageData | string;
  company: string;
  title: string;
  keyPoints: string[];
}

function ExperienceTimelineItem({
  startDate,
  endDate,
  url,
  image,
  company,
  title,
  keyPoints,
}: ExperienceItem) {
  return (
    <div
      className={styles.experienceTimelinePoint}
      key={`${company}-${startDate.toISOString()}`}
    >
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
