import { StaticImageData } from 'next/image';
import Image from 'next-export-optimize-images/image';
import styles from "./DetailedItem.module.scss";
import { formatDateRange } from "@/util/date-time";

export default function DetailedItem({
  startDate,
  endDate,
  url,
  image,
  educator,
  title,
  keyPoints,
  showDateRange,
  className,
}: {
  startDate?: Date;
  endDate?: Date;
  url?: string;
  image: StaticImageData;
  educator: string;
  title: string;
  keyPoints: string[];
  showDateRange?: boolean;
  className?: string;
}) {
  return (
    <div
      className={[styles.detailedItem, className ?? ''].join(" ")}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={`Logo of ${educator}`} />
      </a>
      <div>
        <h3>{educator}</h3>
        {showDateRange ? (
          <span className="education-date">
            {formatDateRange(startDate, endDate)}
          </span>
        ) : null}
        <h4>{title}</h4>
        {keyPoints.length > 1 ? (
          <ul>
            {keyPoints.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : (
          <p>{keyPoints[0]}</p>
        )}
      </div>
    </div>
  );
}
