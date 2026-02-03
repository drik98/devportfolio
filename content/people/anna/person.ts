import type { PersonContent } from "../types";
import about from "./about.json";
import experience from "./experience.json";
import education from "./education.json";
import skills from "./skills.json";
import skillCategories from "./skill-categories.json";

const person: PersonContent = {
  slug: "anna",
  cvFileBase: "anna_sieweck",
  profileImage: "/people/anna/profile_picture.jpg",
  about,
  experience,
  education,
  skills,
  skillCategories,
  theme: {
    primary: "#2e7d32",
    primaryLight: "#a5d6a7",
    primaryDark: "#1b5e20",
    primaryDarker: "#0d3b12",
    primaryRgb: "46, 125, 50",
    bannerOverlay: "rgba(34, 99, 50, 0.8)",
    bannerBackground: "/people/anna/lead-bg.jpg",
  },
  contact: {
    formAction: "https://formspree.io/f/xqelvpok",
  },
};

export default person;
