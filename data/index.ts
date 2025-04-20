import {Clipboard, Zap,Search,Database,BarChart2,Code, Cpu, GitPullRequest,Github, Linkedin, Mail,File, Home,AppWindowMac, LucideSend, User ,Settings } from "lucide-react";

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
  header:{
    navItems:[
        {
            id: 1,
            name: "Home.tsx",
            path: "#home",
            icon: Home,
          },
          {
            id: 2,
            name: "About.tsx",
            path: "#about",
            icon: User,
          },
          {
            id: 3,
            name: "Skills.tsx",
            path: "#skills",
            icon: AppWindowMac,
          },
          {
            id: 4,
            name: "Projects.tsx",
            path: "#recent-projects",
            icon: Settings,
          },
          {
            id: 5,
            name: "Certifications.tsx",
            path: "#certifications",
            icon: File,
          },
          {
            id: 6,
            name: "Contact.tsx",
            path: "#contact",
            icon: LucideSend,
            isRight: true,
          },
    ]

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
    description:"These recent projects are just a glimpse. Dive in to see everything I’ve created.",
    "projects": [
      {
        "id": 1,
        "title": "Food Buddy AI",
        "description": "An AI-powered chatbot providing food recommendations based on user preferences and conditions. Built with RAG, LLMs, Django, React, and Milvus.",
        "image": "",
        "livelink":"https://myomyokhant.site",
        "sourcelink": "https://github.com/your-repo/food-buddy-ai",
        "techstack": ["Django", "React", "Milvus", "LLMs", "RAG"],
        "year": 2025,
        "confidential": true,
        "category":"Freelance",
        "role":"Backend",
        "flowchart":"/img/test.png",
        "details":"With 4+ years of experience in software engineering and AI development, I have worked on full-stack applications, AI-powered solutions, and scalable enterprise systems. I have experience developing AI-driven chatbots, recommendation engines, and automation tools using Python, Django, LangChain, and cloud technologies. In my previous roles, I have worked on broadband subscription management, e-commerce applications, and enterprise-level AI/ML integrations. My work spans startups, telecom companies, and freelance projects, where I have designed and deployed AI applications, microservices, and cloud-based infrastructures. Passionate about innovation, I thrive in fast-paced, collaborative environments that drive technological advancements."
      },
      {
        "id": 2,
        "title": "Smart Activity Planner",
        "description": "A recommendation system for elderly users, generating daily activities based on personas. Utilizes Next.js, Django, Milvus, and LLMs.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/smart-activity-planner",
        "techstack": ["Next.js", "Django", "Milvus", "LLMs"],
        "year": 2025,
        "confidential": true,
        "category":"Work"
      },
      {
        "id": 3,
        "title": "Telecom Public WiFi System",
        "description": "A telecom-based public WiFi management system for handling access control, billing, and user management.",
        "image": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL"],
        "year": 2025,
        "confidential": true,
        "category":"Work"
      },
      {
        "id": 4,
        "title": "eSIM Management System",
        "description": "A scalable enterprise solution for telecom eSIM provisioning and management.",
        "image": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL"],
        "year": 2024,
        "confidential": true,
        "category":"Work"
      },
      {
        "id": 5,
        "title": "Enterprise CMS & Billing System",
        "description": "An internal system for customer management, ticket processing, inventory management, and automated billing.",
        "image": "",
        "sourcelink": "",
        "techstack": ["Laravel", "MySQL"],
        "year": 2025,
        "confidential": true,
        "category":"Work"
      },
      {
        "id": 6,
        "title": "Broadband Website & Management",
        "description": "A broadband service provider's web platform with user management and service handling features.",
        "image": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL"],
        "year": 2024,
        "confidential": true,
        "category":"Work"
      },
      {
        "id": 7,
        "title": "AI Image Processing App (I-mage)",
        "description": "An advanced image editing tool with features like image-to-text conversion, cartoonization, and filters.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/i-mage",
        "techstack": ["Python", "OpenCV", "Tkinter"],
        "year": 2023,
        "confidential": true,
        "category":"Freelance"
      },
      {
        "id": 8,
        "title": "Smart Robotic Car",
        "description": "A robotic car system using Arduino with 3D modeling and 2D design.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/smart-robotic-car",
        "techstack": ["C", "Arduino", "3D Modeling", "2D Design"],
        "year": 2022,
        "confidential": true,
        "category":"Personal"
      },
      {
        "id": 9,
        "title": "University Search Engine",
        "description": "A search engine designed to help students find universities based on various criteria.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/university-search",
        "techstack": ["Java", "MySQL"],
        "year": 2021,
        "confidential": true,
        "category":"Personal"
      },
      {
        "id": 10,
        "title": "Ran Rangoon: Yangon Guide",
        "description": "A web application providing information about Yangon, built with HTML, CSS, Bootstrap, and JavaScript.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/ran-rangoon",
        "techstack": ["JavaScript", "HTML", "CSS", "Bootstrap"],
        "year": 2021,
        "confidential": true,
        "category":"Personal"
      },
      {
        "id": 11,
        "title": "Garbage Collector Robot",
        "description": "An Arduino-based garbage collection robot with a 2D design framework.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/garbage-collector",
        "techstack": ["C", "Arduino", "2D Design"],
        "year": 2020,
        "confidential": true,
        "category":"Personal"
      },
      {
        "id": 12,
        "title": "AI-powered Face Recognition System",
        "description": "A security system integrating facial recognition for authentication using Raspberry Pi.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/face-recognition",
        "techstack": ["Python", "Face Recognition", "Raspberry Pi"],
        "year": 2020,
        "confidential": true,
        "category":"Personal"

      },
      {
        "id": 13,
        "title": "AI-powered Voice Recognition Lock",
        "description": "A smart door lock system using voice recognition for authentication.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/voice-lock",
        "techstack": ["Python", "Voice Recognition", "Raspberry Pi"],
        "year": 2020,
        "confidential": true,
        "category":"Personal"
      },
      {
        "id": 14,
        "title": "Drawing Machine",
        "description": "An automated drawing machine using Arduino with a hardware design component.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/drawing-machine",
        "techstack": ["C", "Arduino", "2D Design", "Hardware Design"],
        "year": 2020,
        "confidential": true,
        "category":"Personal"
      },
      {
        "id": 15,
        "title": "Library Management System",
        "description": "A library database system built using C++.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/library-management",
        "techstack": ["C++"],
        "year": 2020,
        "confidential": true,
        "category":"Personal"
      },
      {
        "id": 16,
        "title": "Ferry Management System",
        "description": "A PHP-based platform for real-time ferry tracking and management.",
        "image": "",
        "sourcelink": "https://github.com/your-repo/ferry-management",
        "techstack": ["PHP", "Bootstrap", "MySQL", "HTML"],
        "year": 2019,
        "confidential": true,
        "category":"Personal"
      }
    ],

  },
  "technologies": {
  "skills": [
    { "id": 1, "name": "Python", "src": "/img/tech/python.png", "link": "https://en.wikipedia.org/wiki/Python_(programming_language)" },
    { "id": 2, "name": "Django", "src": "/img/tech/django.svg", "link": "https://en.wikipedia.org/wiki/Django_(web_framework)" },
    { "id": 3, "name": "React", "src": "/img/tech/react.svg", "link": "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
    { "id": 4, "name": "Next.js", "src": "/img/tech/nextJS.svg", "link": "https://en.wikipedia.org/wiki/Next.js" },
    { "id": 5, "name": "JavaScript", "src": "/img/tech/javascript.svg", "link": "https://en.wikipedia.org/wiki/JavaScript" },
    { "id": 6, "name": "TypeScript", "src": "/img/tech/typescript.svg", "link": "https://en.wikipedia.org/wiki/TypeScript" },
    { "id": 7, "name": "Spring Boot", "src": "/img/tech/springboot.png", "link": "https://en.wikipedia.org/wiki/Spring_Boot" },
    { "id": 8, "name": "MongoDB", "src": "/img/tech/mongoDB.svg", "link": "https://en.wikipedia.org/wiki/MongoDB" },
    { "id": 9, "name": "PostgreSQL", "src": "/img/tech/postgresql.svg", "link": "https://en.wikipedia.org/wiki/PostgreSQL" },
    { "id": 10, "name": "Milvus", "src": "/img/tech/milvus.svg", "link": "https://milvus.io/" },
    { "id": 11, "name": "OpenCV", "src": "/img/tech/opencv.png", "link": "https://en.wikipedia.org/wiki/OpenCV" },
    { "id": 12, "name": "PySpark", "src": "/img/tech/pyspark.png", "link": "https://en.wikipedia.org/wiki/Apache_Spark" },
    { "id": 13, "name": "Node.js", "src": "/img/tech/nodejs.png", "link": "https://en.wikipedia.org/wiki/Node.js" },
    { "id": 14, "name": "Laravel", "src": "/img/tech/laravel.png", "link": "https://en.wikipedia.org/wiki/Laravel" },
    { "id": 15, "name": "PHP", "src": "/img/tech/php.png", "link": "https://en.wikipedia.org/wiki/PHP" },
    { "id": 16, "name": "MySQL", "src": "/img/tech/mysql.png", "link": "https://en.wikipedia.org/wiki/MySQL" },
    { "id": 17, "name": "Redux", "src": "/img/tech/redux.png", "link": "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" },
    { "id": 18, "name": "Tailwind CSS", "src": "/img/tech/tailwind.svg", "link": "https://en.wikipedia.org/wiki/Tailwind_CSS" },
    { "id": 19, "name": "Docker", "src": "/img/tech/docker.svg", "link": "https://en.wikipedia.org/wiki/Docker_(software)" },
    { "id": 20, "name": "Arduino", "src": "/img/tech/arduino.png", "link": "https://en.wikipedia.org/wiki/Arduino" },
    { "id": 21, "name": "Git", "src": "/img/tech/git.svg", "link": "https://en.wikipedia.org/wiki/Git" },
    { "id": 23, "name": "Css", "src": "/img/tech/css.svg", "link": "https://en.wikipedia.org/wiki/css" },
    { "id": 24, "name": "Figma", "src": "/img/tech/figma.svg", "link": "https://en.wikipedia.org/wiki/figma" },
    { "id": 25, "name": "Java", "src": "/img/tech/java.png", "link": "https://en.wikipedia.org/wiki/Java_(programming_language)" }
  ]},
  contact: {
    email: "myokhant12021@gmail.com",
    name: "Myo Myo Khant",
  },
   "certifications": {
    "lists": [
      {
        "name": "Android App Components",
        "src": "/img/certificates/android.jpeg"
      },
      {
        "name": "Django Web Framework",
        "src": "/img/certificates/django.jpeg"
      },
      {
        "name": "Fundamental IT Engineer Certification",
        "src": "/img/certificates/fe.png"
      },
      {
        "name": "Building mobile app with Google Sheets on Glide",
        "src": "/img/certificates/google-slide.jpeg"
      },
      {
        "name": "Human Computer Interaction",
        "src": "/img/certificates/hci.png"
      },
      {
        "name": "IT Professional",
        "src": "/img/certificates/ip.png"
      },
      {
        "name": "Java FullStack Developer",
        "src": "/img/certificates/java-fullstack.jpeg"
      },
      {
        "name": "Programming with JavaScript",
        "src": "/img/certificates/javascript.jpeg"
      },
      {
        "name": "Maker Mentoring K-Lab",
        "src": "/img/certificates/klab-maker.png"
      },
      {
        "name": "Mastering Laravel Framework and PHP",
        "src": "/img/certificates/laravel.jpeg"
      },
      {
        "name": "Command Line in Linux",
        "src": "/img/certificates/linux.jpeg"
      },
      {
        "name": "MCPA Academic Excellence Award",
        "src": "/img/certificates/mcpa-academic.png"
      },
      {
        "name": "Meta Back-End Developer",
        "src": "/img/certificates/meta-backend.jpeg"
      },
      {
        "name": "Meta Front-End Developer",
        "src": "/img/certificates/meta-frontend.jpeg"
      },
      {
        "name": "Introduction to Next.js",
        "src": "/img/certificates/nextjs.jpeg"
      },
      {
        "name": "Developing Backend Apps with Node.js and Express",
        "src": "/img/certificates/nodejs.jpeg"
      },
      {
        "name": "Building Web Applications in PHP",
        "src": "/img/certificates/php.png"
      },
      {
        "name": "Python for Everybody",
        "src": "/img/certificates/python.jpeg"
      },
      {
        "name": "Understanding Research Methods",
        "src": "/img/certificates/research.jpeg"
      },
      {
        "name": "Version Control",
        "src": "/img/certificates/version-control.jpeg"
      },
      {
        "name": "Web Essentials",
        "src": "/img/certificates/web-essential.png"
      }
    ]
  },
    highlights :[
    { title: "Fullstack Development", Icon: Code },
    { title: "AI Integration", Icon: Cpu },
    { title: "API Development", Icon: GitPullRequest },
    { title: "Database Management", Icon: Database },
    { title: "Project Management", Icon: Clipboard },
    { title: "Tools & Analytics", Icon: BarChart2 },
    { title: "CI/CD Deployment", Icon: Zap },
    { title: "Research & Development", Icon: Search },
  ]

};

export default data;
