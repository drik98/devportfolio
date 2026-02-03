import { Locale, Messages, getMultilingualContent } from "@/util/i18n";
import styles from "./Skills.module.scss";
import type { SkillContent, SkillCategoryContent } from "@/content/people/types";

export default function Skills({
  messages,
  locale,
  skills,
  skillCategories,
}: {
  messages: Messages;
  locale: Locale;
  skills: ReadonlyArray<SkillContent>;
  skillCategories: Readonly<Record<string, SkillCategoryContent>>;
}) {
  const displayedSkillCategories = Object.entries(skillCategories)
    .filter(([id, category]) => category.displayOnWebpage)
    .map(([id]) => id);
  const displayedSkills = skills
    .filter((skill) => displayedSkillCategories.includes(skill.category))
    .map((skill) => getMultilingualContent(skill.name, locale))
    .sort();

  return (
    <div id="skills" className={styles.skills}>
      <h2 className="heading">{messages.header.sections.skills}</h2>
      <ul>
        {displayedSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
