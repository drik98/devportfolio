import fs from 'fs';
import messages from '@/messages/de.json' 
import about from "@/content/about.json"
import experience from "@/content/experience.json" 
import education from "@/content/education.json"
import { formatDateRangeCV } from '@/util/date-time';
import { getMultilingualContent, supportedLocales } from '@/util/i18n';

for(const locale of supportedLocales) {
  const birthday = new Intl.DateTimeFormat(locale, {
    dateStyle: "long"
  }).format(new Date(about.birthday));
  
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

\profilepic{profile_picture.jpg} % Profile picture
\cvjobtitle{${messages.banner.jobTitle}} % Job title/career
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
    \customskills{Sprachen}{{Französisch (Konversationssicher)/3.5},{Englisch (Verhandlungssicher)/5},{Deutsch (Muttersprache)/6}}{}
    
    \customskills{Programmiersprachen}{{Shell/4},{Python/4},{Java\/Kotlin/5.5},{CSS\/SCSS/5.5},{JavaScript\/Typescript/6}}{Skala: 0 (Grundkenntnisse) - 6 (Experte)}
    
    \makefootersidenodevfill
    
}
% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% for some reason it's impossible to have a new line here...
\mainsection{
    
    \section{${messages.header.sections.about}}

    ${messages.about.carrer.join('\\newline ')}
    
    \section{${messages.header.sections.experience}}
    
    \begin{twenty}${experience.map(exp => (
`
      \\twentyitem
        {${formatDateRangeCV(new Date(exp.startDate), exp.endDate ? new Date(exp.endDate) : undefined, locale, messages)}}
        {${getMultilingualContent(exp.title, locale)}}
        {\\newline ${getMultilingualContent(exp.company, locale)}}
        {
        \\vspace{-3mm}
        \\begin{itemize}[leftmargin=5mm,noitemsep,topsep=0pt]
${getMultilingualContent(exp.keyPoints, locale).map(item => 
`          \\item ${item}`).join("\n")}
        \\end{itemize}
        }`
)).join("")}
    \end{twenty}

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
    \customskills{Frameworks \& Technologien}{{React/4},{Docker\/Kubernetes/4},{Nuxt/4.5},{CI\/CD/5},{Quarkus\/Spring/5.5},{Vue.js/6}}{}

    \customskills{Agile Entwicklung}{{Product Owner/2},{Kanban/3},{Scrum Master/4},{Scrum/5}}{Skala: 0 (Grundkenntnisse) - 6 (Experte)}

    \makefooterprofile{}
    
    \makefootersidenode
    
}
% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% for some reason there is no way to have a new line here...
\mainsection{

    \section{${messages.header.sections.education}}

    \begin{twentymid}${education.map(ed => (
`
      \\twentyitem
        {${formatDateRangeCV(new Date(ed.startDate), ed.endDate ? new Date(ed.endDate) : undefined, locale, messages)}}
        {${getMultilingualContent(ed.title, locale)}}
        {\\newline ${getMultilingualContent(ed.educator, locale)}}
        {
        \\vspace{-3mm}
        \\begin{itemize}[leftmargin=5mm,noitemsep,topsep=0pt]
${getMultilingualContent(ed.keyPoints, locale).map(item => 
`          \\item ${item}`).join("\n")}
        \\end{itemize}
        }`
      )).join("")}
    \end{twentymid}   
}
\end{document}
`;

const filePath = `./cv/cv_${about.name.toLocaleLowerCase().split(/\s+/).join("_")}_${locale}.tex`;
try {
  fs.writeFileSync(filePath, localizedTemplate, 'utf8');
  console.log('File has been written to ' + filePath);
} catch (err) {
  console.error('Error writing file: ' + filePath, err);
}
}
