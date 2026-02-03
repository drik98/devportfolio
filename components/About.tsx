import styles from "./About.module.scss";
import { formatDate } from "@/util/date-time";
import { Locale, Messages, getMultilingualContent } from "@/util/i18n";
import type { AboutContent, ExperienceContent } from "@/content/people/types";

export default function About({
  messages,
  locale,
  about,
  experience,
  profileImage,
}: {
  messages: Messages;
  locale: Locale;
  about: AboutContent;
  experience: ReadonlyArray<ExperienceContent>;
  profileImage: string;
}) {
  const birthDate = new Date(about.birthday);
  const currentDate = new Date();
  const difference = currentDate.getTime() - birthDate.getTime();
  const ageDate = new Date(difference);
  const currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  const [currentJob] = experience;

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
            <img
              className={styles.profilePicture}
              src={profileImage}
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
