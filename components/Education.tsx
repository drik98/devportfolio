import DetailedItem from "@/components/DetailedItem";
import rawEducation from "@/content/education.json";
import styles from "./Education.module.scss";
import {
  Locale,
  MultilingualList,
  MultilingualString,
  getMultilingualContent,
} from "@/util/i18n";

const education: EducationItem[] = rawEducation.map((item) => ({
  educator: item.educator,
  image: item.image,
  keyPoints: item.keyPoints,
  startDate: new Date(item.startDate),
  title: item.title,
  endDate: item.endDate ? new Date(item.endDate) : undefined,
  url: item.url,
}));

export default function Education({
  messages,
  locale,
}: {
  messages: any;
  locale: Locale;
}) {
  return (
    <div id="education" className={styles.education}>
      <h2 className="heading">{messages.header.sections.education}</h2>
      {education.map((item) => EducationTimelineItem({ ...item, locale }))}
    </div>
  );
}

interface EducationItem {
  educator: MultilingualString;
  endDate?: Date;
  image: string;
  keyPoints: MultilingualList;
  startDate: Date;
  title: MultilingualString;
  url?: MultilingualString;
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
}: EducationItem & { locale: Locale }) {
  return (
    <DetailedItem
      key={`${educator}-${startDate.toISOString()}`}
      showDateRange
      locale={locale}
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
