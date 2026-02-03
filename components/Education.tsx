import DetailedItem from "@/components/DetailedItem";
import styles from "./Education.module.scss";
import {
  Locale,
  MaybeMultilingualList,
  MaybeMultilingualString,
  Messages,
  getMultilingualContent,
} from "@/util/i18n";
import type { EducationContent } from "@/content/people/types";

export default function Education({
  messages,
  locale,
  education,
}: {
  messages: Messages;
  locale: Locale;
  education: ReadonlyArray<EducationContent>;
}) {
  const mappedEducation: EducationItem[] = education.map((item) => ({
    educator: item.educator,
    image: item.image,
    keyPoints: item.keyPoints,
    startDate: new Date(item.startDate),
    title: item.title,
    endDate: item.endDate ? new Date(item.endDate) : undefined,
    url: item.url,
  }));

  return (
    <div id="education" className={styles.education}>
      <h2 className="heading">{messages.header.sections.education}</h2>
      {mappedEducation.map((item) =>
        EducationTimelineItem({ ...item, locale, messages })
      )}
    </div>
  );
}

interface EducationItem {
  educator: MaybeMultilingualString;
  endDate?: Date;
  image: string;
  keyPoints: MaybeMultilingualList;
  startDate: Date;
  title: MaybeMultilingualString;
  url?: MaybeMultilingualString;
}

function EducationTimelineItem({
  startDate,
  endDate,
  url,
  image,
  educator,
  title,
  keyPoints,
  locale,
  messages,
}: EducationItem & { locale: Locale; messages: Messages }) {
  return (
    <DetailedItem
      key={`${educator}-${startDate.toISOString()}`}
      showDateRange
      locale={locale}
      messages={messages}
      startDate={startDate}
      endDate={endDate}
      educator={getMultilingualContent(educator, locale)}
      keyPoints={getMultilingualContent(keyPoints, locale)}
      image={image}
      title={getMultilingualContent(title, locale)}
      url={getMultilingualContent(url, locale)}
    />
  );
}
