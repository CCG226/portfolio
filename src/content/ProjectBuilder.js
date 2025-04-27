import portfolioLogo from "../Images/portfolioLogo.png";
import journalWitLogo from "../Images/journalWitLogo.png";
import gradeHelpLogo from "../Images/gradeHelpLogo.png";
import wordGameLogo from "../Images/wordgameLogo.png";
import GenFreqLogo from "../Images/nuget.png";
export function FindProject(index) {
  const ProjectsList = buildProjectsList();
  if (index < 0) {
    throw new Error("Invalid index");
  }
  if (index > ProjectsList.length) {
    throw new Error("Invalid index");
  }

  for (var i = 0; i < ProjectsList.length; i++) {
    if (index == ProjectsList[i].id) {
      return ProjectsList[i];
    }
  }

  return null;
}
function buildProjectsList() {
  const arrayOfProjects = [];

  arrayOfProjects.push({
    id: 0,
    desc: "JournalWit is a Full-Stack Web App (JavaScript/C#) to enhance the daily journaling experience. It includes a built-in calendar, an AI assistance mode for crafting entries based on key details from the user's day, a default manual mode, mood tracking, and a interactable journal book the user can read.",
    image: journalWitLogo,
    link: "https://journalwit.com/",
  });
  arrayOfProjects.push({
    id: 1,
    desc:
      "GradeHelp is a Full-Stack Web App (Javascript/C#) for educators and students " +
      "to use to track, manage, and calculate grade reports. Designed for both students and educators.",
    image: gradeHelpLogo,
    link: "http://cown521-001-site3.ctempurl.com/",
  });
  arrayOfProjects.push({
    id: 2,
    desc:
      "Word Game (React/C#) is a fun and engaging word puzzle game that combines aspects of word search and tetris. " +
      " The goal is to clear as many letters as possible and achieve the highest score. Currently only singplayer mode is available",
    image: wordGameLogo,
    link: "https://blue-sea-090cff910.6.azurestaticapps.net/",
  });
  arrayOfProjects.push({
    id: 3,
    desc: "My Portfolio is a Web App (React) used to detail my personal projects, education, work experience and contact info.",
    image: portfolioLogo,
    link: "https://connorsportfolio.net/",
  });
  arrayOfProjects.push({
    id: 4,
    desc: "Nuget library for weighted random character generation. The odds of how likely a character is to be generated is based on weighted percent values. With this library, you can effortlessly generate random characters while fine-tuning the chance of specific characters appearing.",
    image: GenFreqLogo,
    link: "https://www.nuget.org/packages/GenLetterByFreqNet/",
  });
  return arrayOfProjects;
}
