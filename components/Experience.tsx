import { StaticImageData } from "next/image";
import DetailedItem from "@/components/DetailedItem";
import rawExperience from "@/content/experience.json";
import { formatDateRange } from "@/util/date-time";
import styles from "./Experience.module.scss";
import {
  Locale,
  MultilingualList,
  MultilingualString,
  getMultilingualContent,
} from "@/util/i18n";

const experiences: ExperienceItem[] = rawExperience.map((experience) => ({
  company: experience.company,
  image: experience.image,
  keyPoints: experience.keyPoints,
  startDate: new Date(experience.startDate),
  title: experience.title,
  endDate: experience.endDate ? new Date(experience.endDate) : undefined,
  url: experience.url,
}));

export default function ExperienceTimeline({
  messages,
  locale,
}: {
  messages: any;
  locale: Locale;
}) {
  return (
    <div id="experience" className={`background-alt ${styles.experience}`}>
      <h2 className="heading">{messages.header.sections.experience}</h2>
      <div className={styles.experienceTimeline}>
        {experiences.map((experiences) =>
          ExperienceTimelineItem({ ...experiences, locale })
        )}
      </div>
    </div>
  );
}

interface ExperienceItem {
  startDate: Date;
  endDate?: Date;
  url?: MultilingualString;
  image: StaticImageData | string;
  company: MultilingualString;
  title: MultilingualString;
  keyPoints: MultilingualList;
}

function ExperienceTimelineItem({
  startDate,
  endDate,
  url,
  image,
  company,
  title,
  keyPoints,
  locale,
}: ExperienceItem & { locale: Locale }) {
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
          {formatDateRange(startDate, endDate, locale)}
        </span>
        <DetailedItem
          className={styles.experienceTimelineContent}
          educator={getMultilingualContent(company, locale)}
          keyPoints={getMultilingualContent(keyPoints, locale)}
          image={image}
          title={getMultilingualContent(title, locale)}
          url={getMultilingualContent(url, locale)}
        />
      </div>
    </div>
  );
}
