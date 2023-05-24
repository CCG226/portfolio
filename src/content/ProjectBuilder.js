import test from "../Images/logo.png";
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
    Desc:
      "JournalWit is a Full-Stack Web Application (Javascript/C#) for daily journaling. JournalWit " +
      " grants users the ability to track their journaling progress with the sites own built in calender. " +
      " The Site Provides an Ai assistance mode that can craft a journal entry for the user using a few important details from their day. " +
      "Users also can manually write their own journal entry. " +
      "JournalWit also constructs a Personal Journal book for the user to read as well as other many other features " +
      "to improve the journaling expiernce",
    image: test,
  });
  arrayOfProjects.push({
    id: 1,
    Desc:
      "GradeHelp is a Full-Stack Web Application (Javascript/C#) for educators and students " +
      "to use to track, manage, and calculate grade reports For educators, they manage their classes, the students in those classes, and each individual students grade report. On the student side, a student can create a personal student profile to manage their semster term grades, the classes apart of those semesters as well as each individual grade in each class.",
    image: test,
  });
  arrayOfProjects.push({
    id: 2,
    Desc:
      "MyAiAid is a Full-Stack Web Application (Javascript/C#) is a website that provides a wide array of " +
      " Ai tools supported by ChatGpT to generate specific styles of text generated content.",
    image: test,
  });
  arrayOfProjects.push({
    id: 3,
    Desc: "My Portfolio is a Web Application (React) used to detail my personal projects, education, work experience and contact info.",
    image: test,
  });

  return arrayOfProjects;
}
