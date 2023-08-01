import portfolioLogo from "../Images/portfolioLogo.png";
import journalWitLogo from "../Images/journalWitLogo.png";
import gradeHelpLogo from "../Images/gradeHelpLogo.png";
import myAiAidLogo from "../Images/myAiAidLogo.png";
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
      "MyAiAid is a Full-Stack Web Application (Javascript/C#) is a website that provides a wide array of " +
      " Ai tools supported by ChatGPT to generate specific styles of text generated content.",
    image: myAiAidLogo,
    link: "http://cown521-001-site1.ctempurl.com/",
  });
  arrayOfProjects.push({
    id: 3,
    desc: "My Portfolio is a Web Application (React) used to detail my personal projects, education, work experience and contact info.",
    image: portfolioLogo,
    link: "https://connorsportfolio.net/",
  });
  arrayOfProjects.push({
    id: 4,
    desc: "Nuget libray for weighted random character generation. The odds of how likely a character is to be generated is based on weighted percent values. With this library, you can effortlessly generate random characters while fine-tuning the chance of specific characters appearing.",
    image: GenFreqLogo,
    link: "https://www.nuget.org/packages/GenLetterByFreqNet/",
  });
  return arrayOfProjects;
}
