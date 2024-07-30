import rawSkills from "@/content/skills.json";
import styles from "./Skills.module.scss";

const skills = rawSkills.map((skill) => skill.name).sort();

export default function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <h2 className="heading">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
