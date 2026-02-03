import type { PersonContent } from "../types";
import about from "./about.json";
import experience from "./experience.json";
import education from "./education.json";
import projects from "./projects.json";
import skills from "./skills.json";
import skillCategories from "./skill-categories.json";

const person: PersonContent = {
  slug: "hendrik",
  cvFileBase: "hendrik_sieweck",
  profileImage: "/people/hendrik/profile_picture.jpg",
  about,
  experience,
  education,
  projects,
  skills,
  skillCategories,
  theme: {
    primary: "#3498db",
    primaryLight: "#a0cfee",
    primaryDark: "#217dbb",
    primaryDarker: "#16527a",
    primaryRgb: "52, 152, 219",
    bannerOverlay: "rgba(33, 125, 187, 0.8)",
    bannerBackground: "/people/hendrik/lead-bg.jpg",
  },
  contact: {
    formAction: "https://formspree.io/bewerbung@smtz.dev",
  },
};

export default person;
