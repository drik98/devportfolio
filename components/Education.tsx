import DetailedItem from "@/components/DetailedItem";
import rawEducation from "@/content/education.json";
import styles from "./Education.module.scss";

const education: EducationItem[] = rawEducation.map((item) => ({
  educator: item.educator,
  image: item.image,
  keyPoints: item.keyPoints,
  startDate: new Date(item.startDate),
  title: item.title,
  endDate: item.endDate ? new Date(item.endDate) : undefined,
  url: item.url,
}));

export default function Education() {
  return (
    <div id="education" className={styles.education}>
      <h2 className="heading">Ausbildung</h2>
      {education.map(EducationTimelineItem)}
    </div>
  );
}

interface EducationItem {
  educator: string;
  endDate?: Date;
  image: string;
  keyPoints: string[];
  startDate: Date;
  title: string;
  url?: string;
}

function EducationTimelineItem({
  startDate,
  endDate,
  url,
  image,
  educator,
  title,
  keyPoints,
}: EducationItem) {
  return (
    <DetailedItem
      key={`${educator}-${startDate.toISOString()}`}
      showDateRange
      startDate={startDate}
      endDate={endDate}
      educator={educator}
      keyPoints={keyPoints}
      image={image}
      title={title}
      url={url}
    />
  );
}
