import { Github, Linkedin, Mail } from "lucide-react";

const data = {
  home: {
    name: "Myo Myo Khant (Varie)",
    description:
      "I Build, Optimize & Scale #AI_Powered_Software & #Backend_Systems",
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "Github",
        link: "https://github.com/Varie-Myo-Myo-Khant",
        icon: Github,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/myo-myo-khant/",
        icon: Linkedin,
      }
    ],
  },
  about: {
    description:
      "🚀 Software Engineer | AI Developer | Backend Specialist",
    image: "/img/about-image.jpg",
    skills: [
        {id:1, text:"I solve real problems—whether it’s fixing broken systems, optimizing performance, or building AI-driven features."},
        {id:2, text:"Fast, efficient, and scalable solutions—no unnecessary complexity, just clean and maintainable code."},
         {id:3, text: "Industry-wide experience—from telecom to AI, startups to enterprises, I deliver results that matter."}
    ],
  },
  projects: {
    description:"Projects that I have recently been worked onHere are some of the recent projects I’ve worked on, demonstrating my expertise in diverse fields.",
    projects: [
        {
          id: 1,
          title: "Social Media App",
          description: "A platform that allows users to connect, share, and interact with others. It provides a space for posting updates and engaging with content from friends, family, and communities around the world.",
          image: "/projects-imgs/social.png",
          githubLink: "https://github.com/mo-hassann/social-app",
          previewLink: "https://social-m-app.vercel.app",
        },
        {
          id: 2,
          title: "Quran App",
          description:
            "In this app you can view the Quran in different languages. You can also listen to the Quran with up to eight different readers. Additionally, you can search for chapters and verses by keyword and view the Quran's translation. Also you can track your reading time and set daily reading goals.",
          image: "/projects-imgs/quran.png",
          githubLink: "https://github.com/mo-hassann/nextjs-quran-app",
          previewLink: "https://quraany-app.vercel.app",
        },
        {
          id: 3,
          title: "Notes Taker",
          description: "The Notes App is a versatile tool designed to help you quickly jot down thoughts, ideas, to-do lists, and important information. you can use it on smartphones, tablets, and computers, making it easy to sync notes across all your devices.",
          image: "/projects-imgs/notes.png",
          githubLink: "https://github.com/mo-hassann/simple-notes-app",
          previewLink: "https://notes-app-s.vercel.app",
        },
        {
          id: 4,
          title: "Developer Portfolio",
          description: "A developer portfolio is a website or digital platform that showcases a developer's skills, projects, and professional experience. It serves as a personal brand, highlighting the developer's expertise and work to potential employers, clients, or collaborators.",
          image: "/projects-imgs/portfolio.png",
          githubLink: "https://github.com/mo-hassann/my-portfolio",
          previewLink: "https://mohamed-hassan.vercel.app",
        },
        {
          id: 5,
          title: "Trello Clone",
          description:
            "Clone of the Trello App which is a popular project management tool designed to help individuals and teams organize tasks and collaborate efficiently. It uses boards, lists, and cards to visually represent projects and tasks, making it easy to track progress and prioritize work.",
          image: "/projects-imgs/trello.png",
          githubLink: "https://github.com/mo-hassann/trello-app",
          previewLink: "https://trello-app-v1.vercel.app",
        },
      ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/img/tech/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/img/tech/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/img/tech/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/img/tech/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/img/tech/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/img/tech/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/img/tech/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/img/tech/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/img/tech/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/img/tech/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/img/tech/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/img/tech/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/img/tech/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/img/tech/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/img/tech/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "myokhant12021@gmail.com",
    name: "Myo Myo Khant",
  },
};

export default data;
