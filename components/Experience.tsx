import { StaticImageData } from "next/image";
import DetailedItem from "@/components/DetailedItem";
import rawExperience from "@/content/experience.json";
import { formatDateRange } from "@/util/date-time";
import styles from "./Experience.module.scss";
import {
  Locale,
  MaybeMultilingualList,
  MaybeMultilingualString,
  Messages,
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
  messages: Messages;
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
  url?: MaybeMultilingualString;
  image: StaticImageData | string;
  company: MaybeMultilingualString;
  title: MaybeMultilingualString;
  keyPoints: MaybeMultilingualList;
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
