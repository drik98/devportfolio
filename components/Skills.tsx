import styles from "./Skills.module.scss";

const skills = [
  "CI/CD",
  "CSS/SCSS",
  "Docker",
  "E2E-Testing",
  "Gatsby.js",
  "Git Pipeline",
  "Git",
  "GitHub",
  "GitLab",
  "Gradle",
  "Gridsome",
  "Hibernate",
  "HTML",
  "Integration testing",
  "Jasmine",
  "Java",
  "JavaScript",
  "JPA",
  "JUnit",
  "Kotlin",
  "Kubernetes",
  "Linux",
  "Liquibase",
  "Maven",
  "Micro services",
  "Netlify",
  "Next.js",
  "Nuxt",
  "PHP",
  "Playwright",
  "PostgreSQL",
  "Process Mining",
  "Python",
  "Quarkus",
  "React",
  "REST",
  "Spring",
  "SQL",
  "Test-driven development",
  "Typescript",
  "Unit testing",
  "vite",
  "vitest",
  "vue.js",
  "Webpack",
].sort();

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
