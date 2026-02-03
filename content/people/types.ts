import type {
  Locale,
  MaybeMultilingualList,
  MaybeMultilingualString,
} from "@/util/i18n";

export interface AboutContent {
  name: string;
  birthday: string;
  phoneNumber: string;
  address: string;
  website: string;
  linkedIn?: string;
  xing?: string;
  github?: string;
  mail: string;
  metadata: {
    title: MaybeMultilingualString;
    description: MaybeMultilingualString;
  };
  about: {
    career: MaybeMultilingualList;
    myself: MaybeMultilingualString;
  };
}

export interface ExperienceContent {
  company: MaybeMultilingualString;
  url?: MaybeMultilingualString;
  startDate: string;
  endDate?: string;
  title: MaybeMultilingualString;
  image: string;
  keyPoints: MaybeMultilingualList;
}

export interface EducationContent {
  educator: MaybeMultilingualString;
  url?: MaybeMultilingualString;
  startDate: string;
  endDate?: string;
  title: MaybeMultilingualString;
  image: string;
  keyPoints: MaybeMultilingualList;
}

export interface ProjectTechnology {
  url: string;
  image: string;
  name: string;
}

export interface ProjectContent {
  description: MaybeMultilingualString;
  image: string;
  projectUrl?: string;
  sourceCodeUrl?: string;
  technologies: ProjectTechnology[];
  title: MaybeMultilingualString;
}

export interface SkillContent {
  name: MaybeMultilingualString;
  level: number;
  category: string;
  groupWith?: string;
  hideOnCv?: boolean;
}

export interface SkillCategoryContent {
  label: MaybeMultilingualString;
  displayOnWebpage?: boolean;
}

export interface ThemeConfig {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryDarker: string;
  primaryRgb: string;
  bannerOverlay: string;
  bannerBackground: string;
}

export interface PersonContent {
  slug: string;
  cvFileBase: string;
  profileImage: string;
  about: AboutContent;
  experience?: ReadonlyArray<ExperienceContent>;
  education?: ReadonlyArray<EducationContent>;
  projects?: ReadonlyArray<ProjectContent>;
  skills?: ReadonlyArray<SkillContent>;
  skillCategories?: Readonly<Record<string, SkillCategoryContent>>;
  theme: ThemeConfig;
  contact: {
    formAction: string;
  };
  supportedLocales?: Locale[];
}

export const personSlugs = ["hendrik"] as const;
export type PersonSlug = (typeof personSlugs)[number];
export const defaultPersonSlug: PersonSlug = "hendrik";
