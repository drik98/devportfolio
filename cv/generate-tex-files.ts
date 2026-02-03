import fs from "fs";
import path from "path";
import { getActivePerson } from "@/content/people/load";
import type { PersonContent } from "@/content/people/types";
import { formatDateRangeCV } from "@/util/date-time";
import {
  Locale,
  getMessages,
  getMultilingualContent,
  supportedLocales,
} from "@/util/i18n";

const SLASH_SEPARATOR_CHAR = "\\char`\\/";
const sanitze = (value: string) =>
  value.replaceAll("/", SLASH_SEPARATOR_CHAR).replaceAll("&", "\\&");

function getCvProfileImageTexPath(person: PersonContent) {
  return path.posix.join("people", person.slug, "profile_picture.jpg");
}

function getCvProfileImageFsPath(person: PersonContent) {
  return path.join("cv", "people", person.slug, "profile_picture.jpg");
}

function ensureCvProfileImage(person: PersonContent) {
  const cvImagePath = path.join(process.cwd(), getCvProfileImageFsPath(person));
  const publicImagePath = path.join(
    process.cwd(),
    "public",
    person.profileImage.replace(/^\//, ""),
  );

  fs.mkdirSync(path.dirname(cvImagePath), { recursive: true });
  fs.copyFileSync(publicImagePath, cvImagePath);
}

async function run() {
  const activePerson = await getActivePerson();
  ensureCvProfileImage(activePerson);
  for (const locale of supportedLocales) {
    await generateTemplate(activePerson, locale);
  }
}

run().catch((error) => {
  console.error("Failed to generate CV templates:", error);
  process.exitCode = 1;
});

async function generateTemplate(person: PersonContent, locale: Locale) {
  const messages = await getMessages(locale);
  const { about, experience, education, skills, skillCategories } = person;
  const displayedSkills = skills?.filter((skill) => !skill.hideOnCv) ?? [];

  const birthday = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(new Date(about.birthday));

  const hasSkillData =
    displayedSkills.length > 0 && skillCategories && Object.keys(skillCategories).length > 0;

  const categorizedSkills = hasSkillData
    ? Object.entries(skillCategories).map(([id, category]) => {
        return {
          ...category,
          id,
          label: getMultilingualContent(category.label, locale),
          skills: displayedSkills
            .filter((skill) => skill.category === id && !skill.groupWith)
            .map((skill) => {
              const name = getMultilingualContent(skill.name, locale);
              const groupedSkills = displayedSkills.filter(
                (otherSkill) => otherSkill.groupWith === name,
              );
              return {
                ...skill,
                label: [
                  name,
                  ...groupedSkills.map((groupedSkill) =>
                    getMultilingualContent(groupedSkill.name, locale),
                  ),
                ].join("/"),
              };
            }),
        };
      })
    : [];

  const [firstCategory, secondCategory, ...otherCategories] = categorizedSkills;

  const makeCustomSkills = (skillCategory?: (typeof firstCategory)) => {
    if (!skillCategory || skillCategory.skills.length === 0) {
      return "";
    }
    const sortedSkills = skillCategory.skills.sort((a, b) => a.level - b.level);
    return String.raw`\customskills{${sanitze(skillCategory.label)}}{${sortedSkills.map((skill) => `${sanitze(skill.label)}/${skill.level}`)}}{}`;
  };

  const sideSkillsPrimary = [firstCategory, secondCategory]
    .map((category) => makeCustomSkills(category))
    .filter(Boolean)
    .join("\n\n");

  const sideSkillsSecondary = otherCategories
    .map((category) => `    ${makeCustomSkills(category)}`)
    .filter((line) => line.trim().length > 0)
    .join("\n");

  const careerParagraphs = about.about?.career
    ? getMultilingualContent(about.about.career, locale)
    : [];

  const experienceSection =
    experience && experience.length
      ? String.raw`
    \section{${messages.header.sections.experience}}
    
    \begin{twenty}${experience
      .map(
        (exp) =>
          `
      \\twentyitem
        {${formatDateRangeCV(new Date(exp.startDate), exp.endDate ? new Date(exp.endDate) : undefined, locale, messages)}}
        {${getMultilingualContent(exp.title, locale)}}
        {\\newline ${getMultilingualContent(exp.company, locale)}}
        {
        \\vspace{-3mm}
        \\begin{itemize}[leftmargin=5mm,noitemsep,topsep=0pt]
${getMultilingualContent(exp.keyPoints, locale)
  .map((item) => `          \\item ${item}`)
  .join("\n")}
        \\end{itemize}
        }`,
      )
      .join("")}
    \end{twenty}
`
      : "";

  const educationSection =
    education && education.length
      ? String.raw`
    \section{${messages.header.sections.education}}

    \begin{twentymid}${education
      .map(
        (ed) =>
          `
      \\twentyitem
        {${formatDateRangeCV(new Date(ed.startDate), ed.endDate ? new Date(ed.endDate) : undefined, locale, messages)}}
        {${getMultilingualContent(ed.title, locale)}}
        {\\newline ${getMultilingualContent(ed.educator, locale)}}
        {
        \\vspace{-3mm}
        \\begin{itemize}[leftmargin=5mm,noitemsep,topsep=0pt]
${getMultilingualContent(ed.keyPoints, locale)
  .map((item) => `          \\item ${item}`)
  .join("\n")}
        \\end{itemize}
        }`,
      )
      .join("")}
    \end{twentymid}   
`
      : "";

  const localizedTemplate = String.raw`
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Twenty One Seconds Resume/CV
% LaTeX Template
% Version 1.2 (2024/06/26)
%
% This template has been downloaded from:
% http://www.LaTeXTemplates.com
%
%
% License
% Original author:
% Carmine Spagnuolo (cspagnuolo@unisa.it) with major modifications by 
% Alessandro Trinca Tornidor (alessandro at trinca dot tornidor dot com)
%% Copyright 2022-now Alessandro Trinca Tornidor (alessandro at trinca dot tornidor dot com)
%
% This work may be distributed and/or modified under the
% conditions of the LaTeX Project Public License, either version 1.3
% of this license or (at your option) any later version.
% The latest version of this license is in
%   http://www.latex-project.org/lppl.txt
% and version 1.3 or later is part of all distributions of LaTeX
% version 2005/12/01 or later.
%
% This work has the LPPL maintenance status 'maintained'.
% 
% The Current Maintainer of this work is Alessandro Trinca Tornidor
%
% This work consists of the files template.tex and twentyonesecondcv.cls
% and the derived file twentyonesecondcv.pdf
%
% see https://github.com/trincadev/cv-latex-twentyoneseconds/ for updates

%----------------------------------------------------------------------------------------
%	PACKAGES AND OTHER DOCUMENT CONFIGURATIONS
%----------------------------------------------------------------------------------------

\documentclass[letterpaper]{twentyonesecondcv} % a4paper for A4

\usepackage[shortlabels]{enumitem}

\profilepic{${getCvProfileImageTexPath(person)}} % Profile picture
\cvjobtitle{${getMultilingualContent(about.jobTitle, locale)}} % Job title/career
\cvname{${about.name}} % Your name

%% Mandatory informations used by \makeinfoprofile. To hide these fields leave the contents of the macro empty (e.g. '\cvsitepersonal{}' instead than '\cvsitepersonal{en.wikipedia.org}')
%% See https://tex.stackexchange.com/a/692525/109031
\cvbirthdate{${birthday}}
\cvnumberphone{${about.phoneNumber}}
\cvaddressurl{}
\cvaddress{${about.address}}        % Short address/location, use \newline if more than 1 line is required
\cvsitepersonal{${about.website}}       % personal site
\cvstackoverflow{}
\cvlinkedin{${about.linkedIn}}
\cvskypeurlbase{} % Skype 
\cvskypeurl{}
\cvgithub{${about.github}}     
\cvmail{${about.mail}}

\textfootersidenote{}

\pagenumber{${messages.cv.pageNumber}}{${messages.cv.pageOf}}

\begin{document}
\sidesection{
    \makeheaderprofile
    % \makeheaderprofilenoimg
    \makeinfoprofile
    % \aboutme{Short section about myself.}
    % \customsidesection{Header profile section}{It's possible to hide the profile picture using \textbackslash\texttt{makeheaderprofilenoimg} instead than \textbackslash\texttt{makeheaderprofile} (you could remove  \textbackslash\texttt{profilepic\{image.png\}} then).}
    %\customsidesection{Info profile section}{The command \textbackslash\texttt{makeinfoprofile} doesn't use empty macros \textbackslash\texttt{cvsite*\{\}} (e.g. \textbackslash\texttt{cvsitepersonal\{\}} instead than \textbackslash\texttt{cvsitepersonal\{example.com\}}).}
    %\customsidesection{About the info profile commands}{If not empty the \textbackslash\texttt{cvaddressurl\{\}} command create a custom hyperlink containing the \textbackslash\texttt{cvaddress\{Address, Nation\}} text. Same for \textbackslash\texttt{cvskypeurlbase\{join.skype.com/...\}} and \textbackslash\texttt{cvskypeurl\{skype-username\}} (visit \colorhrefcustom{https://support.skype.com/en/faq/FA34802/}{skype FAQs}) to create an invite url.}

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%Skill bar section, each skill must have a value between 0 an 6 (float)%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
${sideSkillsPrimary}
    
    \makefootersidenodevfill
    
}
% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% for some reason it's impossible to have a new line here...
\mainsection{
    
    \section{${messages.header.sections.about}}

    ${careerParagraphs.join("\\newline ")}

${experienceSection}

%% end main section
}
% \newpage

\clearpage  % mandatory to make it work the command '\pagenumber'

% \noindent
\sidesection{
    \makeheaderprofilenoimg


  
    
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%Skill bar section, each skill must have a value between 0 an 6 (float)%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
${sideSkillsSecondary}

    \makefooterprofile{}
    
    \makefootersidenode
    
}
% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% for some reason there is no way to have a new line here...
\mainsection{
${educationSection}
}
\end{document}
`;

  const filePath = `./cv/cv_${person.cvFileBase}_${locale}.tex`;
  try {
    fs.writeFileSync(filePath, localizedTemplate, "utf8");
    console.log("File has been written to " + filePath);
  } catch (err) {
    console.error("Error writing file: " + filePath, err);
  }
}
