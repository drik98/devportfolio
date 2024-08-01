import rawSkills from "@/content/skills.json";
import categories from "@/content/skill-categories.json";
import { Locale, Messages, getMultilingualContent } from "@/util/i18n";
import styles from "./Skills.module.scss";

export default function Skills({
  messages,
  locale,
}: {
  messages: Messages;
  locale: Locale;
}) {
  const displayedSkillCategories = Object.entries(categories)
    .filter(([id, category]) => category.displayOnWebpage)
    .map(([id]) => id);
  const skills = rawSkills
    .filter((skill) => displayedSkillCategories.includes(skill.category))
    .map((skill) => getMultilingualContent(skill.name, locale))
    .sort();

  return (
    <div id="skills" className={styles.skills}>
      <h2 className="heading">{messages.header.sections.skills}</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
