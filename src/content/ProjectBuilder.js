import portfolioLogo from "../Images/portfolioLogo.png";
import journalWitLogo from "../Images/journalWitLogo.png";
import gradeHelpLogo from "../Images/gradeHelpLogo.png";
import myAiAidLogo from "../Images/myAiAidLogo.png";
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
    Desc: "JournalWit is a Full-Stack Web App (JavaScript/C#) for daily journaling. It includes a built-in calendar to track journaling progress and an AI assistance mode for crafting entries based on key details from the user's day. Users can also manually write their own entries. JournalWit also creates a readable and interactable journal book the user can read as well as offering various other features to enhance the journaling experience.",
    image: journalWitLogo,
  });
  arrayOfProjects.push({
    id: 1,
    Desc:
      "GradeHelp is a Full-Stack Web App (Javascript/C#) for educators and students " +
      "to use to track, manage, and calculate grade reports For educators, they manage their classes, the students in those classes, and each individual students grade report. On the student side, a student can create a personal student profile to manage their semster term grades, the classes apart of those semesters as well as each individual grade in each class.",
    image: gradeHelpLogo,
  });
  arrayOfProjects.push({
    id: 2,
    Desc:
      "MyAiAid is a Full-Stack Web Application (Javascript/C#) is a website that provides a wide array of " +
      " Ai tools supported by ChatGpT to generate specific styles of text generated content.",
    image: myAiAidLogo,
  });
  arrayOfProjects.push({
    id: 3,
    Desc: "My Portfolio is a Web Application (React) used to detail my personal projects, education, work experience and contact info.",
    image: portfolioLogo,
  });

  return arrayOfProjects;
}
