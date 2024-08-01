import Image from "next-export-optimize-images/image";
import experience from "@/content/experience.json";
import about from "@/content/about.json";
import profilePic from "@/cv/profile_picture.jpg";
import styles from "./About.module.scss";
import { formatDate } from "@/util/date-time";
import { Locale, Messages, getMultilingualContent } from "@/util/i18n";

const birthDate = new Date(about.birthday);
const currentDate = new Date();
const difference = currentDate.getTime() - birthDate.getTime();
const ageDate = new Date(difference);
const currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);

const [currentJob] = experience;

export default function About({
  messages,
  locale,
}: {
  messages: Messages;
  locale: Locale;
}) {
  const aboutMyself = messages.about.myself
    .replace("{currentAge}", String(currentAge))
    .replace(
      "{startDate}",
      formatDate(new Date(currentJob.startDate), locale, messages)
    )
    .replace("{jobTitle}", getMultilingualContent(currentJob.title, locale))
    .replace("{company}", getMultilingualContent(currentJob.company, locale));

  return (
    <div id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutRow}>
          <div className="col-md-4">
            <h2 className="heading">{messages.header.sections.about}</h2>
            <Image
              className={styles.profilePicture}
              src={profilePic}
              alt={about.name}
            />
          </div>
          <div className="col-md-8">
            <p dangerouslySetInnerHTML={{ __html: aboutMyself }} />
            <br />
            {messages.about.carrer.map(
              (paragraph: string, index: number, array: string[]) => (
                <>
                  <p key={index}>{paragraph}</p>
                  {index !== array.length - 1 ? <br /> : null}
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
