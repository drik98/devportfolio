import rawSkills from "@/content/skills.json";
import styles from "./Skills.module.scss";

const skills = rawSkills.map((skill) => skill.name).sort();

export default function Skills({ messages }: { messages: any }) {
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
