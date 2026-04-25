import chatify from "../Assets/Projects/chatify.png";
import blog from "../Assets/Projects/blog.png";
import codeEditor from "../Assets/Projects/codeEditor.png";
import leaf from "../Assets/Projects/leaf.png";

export const portfolioData = {
  name: "Chandu Raparthi",
  shortName: "Chandu",
  headline: "Full Stack Developer | MERN Stack | AI Enthusiast",
  location: "Andhra Pradesh, India",
  heroDescription:
    "I am a B.Tech student in AI & Engineering with a strong interest in full stack development and AI-based applications.",
  introParagraphs: [
    "I enjoy building real-world projects using MERN stack, PHP, and MySQL.",
    "I have developed applications like a Leave Management System, AI Chatbot, and Personal Diary app.",
    "Currently, I am focused on improving my skills and preparing for software development internships.",
  ],
  aboutSummary:
    "I enjoy building practical software, learning by shipping projects, and strengthening both frontend and backend skills through hands-on development.",
  typewriterRoles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Enthusiast",
    "Software Internship Aspirant",
  ],
  interests: [
    "Building web applications",
    "Exploring AI tools and applications",
    "Improving problem solving and development skills",
  ],
  quote: "Keep learning, keep building, and never stop improving.",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/chanduraparthi" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/chandu-raparth",
    },
  ],
  githubUsername: "chanduraparthi",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "PHP",
    "Java",
    "Python",
    "Git",
    "GitHub Actions",
    "Docker",
    "Linux",
    "AWS",
  ],
  tools: [
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "Chrome DevTools",
  ],
  projects: [
    {
      title: "Leave Management System",
      description:
        "A web-based system for managing student leave requests with features like leave application, approval workflow, and leave balance tracking. Built using PHP and MySQL.",
      image: leaf,
      ghLink: "https://github.com/chanduraparthi/Leave-Management-System.git",
    },
    {
      title: "My Diary",
      description:
        "A full-stack diary application where users can write, edit, and manage personal notes securely. Built using Node.js, Express, and MongoDB.",
      image: blog,
      ghLink: "https://github.com/chanduraparthi/My_Dairy_Project.git",
    },
    {
      title: "AI MERN Chatbot",
      description:
        "An AI-powered chatbot built using the MERN stack that supports real-time conversations and dynamic responses.",
      image: chatify,
      ghLink: "https://github.com/chanduraparthi/Ai_Chatbot_Chandu.git",
    },
    {
      title: "Web Calculator",
      description:
        "A simple responsive calculator for basic arithmetic operations built using HTML, CSS, and JavaScript.",
      image: codeEditor,
      ghLink: "https://github.com/chanduraparthi/CALCULATOR.git",
    },
  ],
};
