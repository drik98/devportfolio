import { StaticImageData } from "next/image";
import DetailedItem from "@/components/DetailedItem";
import { formatDateRange } from "@/util/date-time";
import styles from "./Experience.module.scss";
import {
  Locale,
  MaybeMultilingualList,
  MaybeMultilingualString,
  Messages,
  getMultilingualContent,
} from "@/util/i18n";
import type { ExperienceContent } from "@/content/people/types";

export default function ExperienceTimeline({
  messages,
  locale,
  experience,
}: {
  messages: Messages;
  locale: Locale;
  experience: ReadonlyArray<ExperienceContent>;
}) {
  const experiences: ExperienceItem[] = experience.map((item) => ({
    company: item.company,
    image: item.image,
    keyPoints: item.keyPoints,
    startDate: new Date(item.startDate),
    title: item.title,
    endDate: item.endDate ? new Date(item.endDate) : undefined,
    url: item.url,
  }));

  return (
    <div id="experience" className={`background-alt ${styles.experience}`}>
      <h2 className="heading">{messages.header.sections.experience}</h2>
      <div className={styles.experienceTimeline}>
        {experiences.map((experiences) =>
          ExperienceTimelineItem({ ...experiences, locale, messages })
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
  messages,
}: ExperienceItem & { locale: Locale; messages: Messages }) {
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
          {formatDateRange(startDate, endDate, locale, messages)}
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
