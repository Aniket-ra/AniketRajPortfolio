import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1+ years of hands-on experience, My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated Full Stack Developer with 1+ years of hands-on experience. Proficient in frontend development using React for building dynamic user interfaces, I also excel in backend technologies such as java and Mysql for efficient database management. My expertise extends to Linux environments, where I handle deployment and system administration tasks with ease. Passionate about technology and problem-solving, I strive to deliver robust, scalable solutions that exceed client expectations.`;
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "Act21 Software (Pvt) Ltd",
    description: `With overall 1+ YOE, I have about a year of experience working with Java technology, where I created and updated java rules and developed new ones. I also set up complete projects from the ground up on Linux servers using Docker and enhanced security with Keycloak authentication and SSL. For the past nine months, I have been focusing on frontend development with React, contributing to the creation of Hyperform as part of a collaborative team.`,
    technologies: ["Java","mysql","Javascript", "React.js","Linux","docker"],
  }
];

export const PROJECTS = [
  {
    title: "Employee Management Systrem",
    image: project1,
    description:
      "A fully functional Full stack  spring boot project with features like Add new employee details, update existing one, delete, read all employees details.",
    technologies: ["HTML", "CSS", "React", "Spring Boot", "Mysql"],
  },
  {
    title: "Multiple Mini Projects(Bolg app, To-do List, Movies App)",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript","Api integeration", "react-js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },

];

export const CONTACT = {
  address: "Vaishali,Ghaziabad, Uttar Pradesh",
  phoneNo: "7011609507",
  email: "ar18.raj@gmail.com",
};
