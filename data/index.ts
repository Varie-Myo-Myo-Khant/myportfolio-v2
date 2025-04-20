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
        "title": "Food Buddy AI Chatbot",
        "description": "An AI chatbot offering personalized food recommendations based on user preferences, conditions, and contexts.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Django", "Milvus", "LLMs", "Messenger API", "OpenAI API", "RAG"],
        "year": 2025,
        "confidential": true,
        "category": "Freelance",
        "role": "Backend",
        "flowchart": "",
        "details": "Designed and implemented a conversational AI chatbot that delivers personalized food suggestions using LangChain and RAG (Retrieval-Augmented Generation). Integrated with Facebook Messenger, the bot uses Milvus vector search to retrieve contextually relevant data. Developed backend APIs with Django, and managed persona matching logic and OpenAI integrations. Enhanced user engagement and offered intelligent interaction for better nutritional awareness."
      },
      {
        "id": 2,
        "title": "GoGo: Smart Activity Planner",
        "description": "An intelligent recommendation system generating daily activities for elderly users based on personas and contextual matching.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Next.js", "Django", "Milvus", "LLMs", "OpenAI API", "RAG"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Full Stack",
        "flowchart": "",
        "details": "Developed a personalized activity scheduling system that matches elderly users to daily routines based on persona clustering and semantic similarity. The backend leverages Django, Milvus, and LLM-based RAG for contextual recommendations, while the frontend was built using Next.js for a dynamic and accessible interface. The system significantly improved user engagement and reduced manual caregiver effort. The project also involved persona-based vector retrieval, user feedback collection, and real-time data syncing."
      },
      {
        "id": 3,
        "title": "Telecom Broadband System",
        "description": "A robust backend platform for managing broadband subscriptions, sales operations, user access, and real-time customer support.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Backend",
        "flowchart": "",
        "details": "Led backend development of a telecom management system for a major broadband provider, enabling subscription control, B2B sales processing, user access management, and customer complaint resolution. Built using Laravel and MySQL, the system supported multi-role dashboards, real-time SLA monitoring, and workflow automation. Improved service response time and reduced manual overhead through smart queue and notification features."
      },
      {
        "id": 4,
        "title": "eSIM Management System",
        "description": "An enterprise-grade system for provisioning, tracking, and managing telecom eSIM services at scale.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL"],
        "year": 2025,
        "confidential": true,
        "category": "Work",
        "role": "Backend",
        "flowchart": "",
        "details": "Built a secure and scalable backend system for managing telecom eSIM operations. Responsibilities included integrating provisioning logic, SIM activation/deactivation APIs, user role segregation, and ensuring security compliance. Delivered an admin-friendly interface for batch operations and service control. Enhanced system uptime and improved provisioning flow for thousands of telecom customers."
      },
      {
        "id": 5,
        "title": "Enterprise CMS & Billing System",
        "description": "An internal CMS used for broadband service management, customer ticketing, and automated billing operations.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Laravel", "MySQL"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Full Stack",
        "flowchart": "",
        "details": "Designed and developed a full-stack enterprise solution to manage customer profiles, service subscriptions, billing cycles, and internal support ticketing. Integrated automated billing with error detection and reporting modules, streamlining workflows and minimizing delays. Boosted operational efficiency by enabling cross-team collaboration and reducing manual data handling through predictive and automated tools."
      },
      {
        "id": 6,
        "title": "Broadband Website & Management",
        "description": "A responsive web platform for broadband users to manage accounts, check usage, and interact with customer service.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Full Stack",
        "flowchart": "",
        "details": "Developed a user-facing website and backend system for a broadband provider, supporting customer registration, package selection, service usage tracking, and support ticket submission. The project improved customer self-service capabilities, reduced support load, and offered a unified dashboard for account and service management."
      },
      {
        "id": 7,
        "title": "I-mage: AI Image Processing App",
        "description": "A desktop-based AI tool for converting images to cartoon, grayscale, text, and applying filters.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/I-mage-Main",
        "techstack": ["Python", "OpenCV", "Tkinter"],
        "year": 2023,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack",
        "flowchart": "",
        "details": "Built a GUI-based image processing application using Python and Tkinter. Integrated OpenCV for image-to-text extraction, cartoon filters, edge detection, grayscale conversion, and brightness/contrast adjustments. Designed for non-technical users, the tool provides offline image enhancement and educational use-cases."
      },
      {
        "id": 8,
        "title": "SalesCraft Pro",
        "description": "An intelligent retail management suite with POS integration and advanced sales reporting.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/SalesCraft-Pro-Intelligent-Retail-Suite",
        "techstack": ["Java", "Spring Boot", "MongoDB", "React", "Redux"],
        "year": 2023,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack",
        "flowchart": "",
        "details": "Developed a modular POS and retail analytics platform using Spring Boot for backend services and React/Redux for the frontend. Integrated MongoDB for flexible product and inventory data modeling. Enabled real-time sales tracking, customer segmentation, and reporting dashboard with data visualization for retail decision-making."
      },
      {
        "id": 9,
        "title": "Market Basket Analysis Platform",
        "description": "A data mining tool for customer segmentation and market basket analytics using clustering and association rules.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/e-commerce-behavioral-analysis",
        "techstack": ["Python", "Apache PySpark", "PostgreSQL"],
        "year": 2022,
        "confidential": true,
        "category": "Freelance",
        "role": "Data Analyst / Backend",
        "flowchart": "",
        "details": "Analyzed customer behavior using FP-Growth and K-Means clustering on e-commerce data. Implemented ETL pipelines using PySpark, and stored analytical data in PostgreSQL. Delivered association rules and insights to improve product bundling, pricing, and cross-selling strategies."
      },
      {
        "id": 10,
        "title": "Speech Recognition and Smart Door Lock System",
        "description": "A smart home security system integrating voice and facial recognition with Raspberry Pi.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Smart-Home",
        "techstack": ["Python", "OpenCV", "Voice Recognition", "Raspberry Pi", "Google Assistant API"],
        "year": 2020,
        "confidential": false,
        "category": "Personal",
        "role": "Embedded Developer",
        "flowchart": "",
        "details": "Created a security automation system using Raspberry Pi that unlocks doors via voice commands and facial recognition. Integrated OpenCV for real-time face detection and Google Assistant API for voice control. Enhanced smart home safety using biometric identification."
      },
      {
        "id": 11,
        "title": "Hi-Find: Lost & Found Portal",
        "description": "A lost-and-found web portal designed for campuses to report and retrieve misplaced items.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/your-repo/smart-robotic-car",
        "techstack": ["Python", "Django", "Node.js", "Socket.io", "HTML", "MySQL"],
        "year": 2021,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack",
        "flowchart": "",
        "details": "Built a real-time lost & found platform for university environments using Django for backend and Node.js with Socket.io for real-time messaging. Enabled users to report lost items and communicate with finders. Supported role-based access and real-time status updates for streamlined item recovery."
      },
      {
        "id": 12,
        "title": "Smart Robotic Car",
        "description": "A robotic car system with motion control and object detection using Arduino and 3D modeling.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Robotic-Car",
        "techstack": ["C", "Arduino", "3D Modeling", "2D Design"],
        "year": 2020,
        "confidential": false,
        "category": "Personal",
        "role": "Embedded Developer",
        "flowchart": "",
        "details": "Developed a smart robotic car for academic competition using Arduino. Programmed autonomous navigation with obstacle avoidance. Designed the chassis using 3D modeling tools and documented sensor logic using 2D schematic diagrams. The project placed second in a regional robotics challenge."
      },
      {
        "id": 13,
        "title": "University Search Engine",
        "description": "A standalone application that helps students search universities in Myanmar based on multiple filters and preferences.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Java", "MySQL"],
        "year": 2021,
        "confidential": false,
        "category": "Personal",
        "role": "Backend / Desktop Developer",
        "flowchart": "",
        "details": "Built a Java-based university search tool allowing students to find institutions by location, specialization, and admission criteria. Designed and implemented a local MySQL database to handle search queries efficiently. Focused on usability and local language support to improve accessibility for Myanmar students."
      },
      {
        "id": 14,
        "title": "Ran Rangoon: Yangon Guide",
        "description": "An informative web platform for exploring culture, food, and destinations across Yangon.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["JavaScript", "HTML", "CSS", "Bootstrap"],
        "year": 2021,
        "confidential": false,
        "category": "Personal",
        "role": "Frontend Developer",
        "flowchart": "",
        "details": "Created a static website featuring attractions, cultural insights, and local businesses in Yangon. Designed with mobile responsiveness in mind using Bootstrap and custom CSS. Aimed at tourists and newcomers to easily navigate the city and find useful resources."
      },
      {
        "id": 15,
        "title": "Garbage Collector Robot",
        "description": "An automated Arduino-based robot designed to collect small objects and waste from indoor environments.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Garbage-Collector-Arduino-Project",
        "techstack": ["C", "Arduino", "2D Design"],
        "year": 2020,
        "confidential": false,
        "category": "Personal",
        "role": "Embedded Developer",
        "flowchart": "",
        "details": "Engineered an Arduino-controlled robot that autonomously collects waste using IR sensors and mechanical arms. Created 2D blueprints for mechanical layout and wiring diagrams. Designed as a prototype to promote environmental awareness in schools."
      },
      {
        "id": 16,
        "title": "Drawing Machine",
        "description": "An automated machine that can replicate sketches and signatures using Arduino and motor control.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Drawing-Machine",
        "techstack": ["C", "Arduino", "2D Design", "Hardware Design"],
        "year": 2018,
        "confidential": false,
        "category": "Personal",
        "role": "Embedded Developer",
        "flowchart": "",
        "details": "Built a CNC-inspired drawing machine capable of converting digital paths into physical sketches. Used Arduino microcontrollers to control servo motors and draw on paper with precise movements. Included hand-crafted mechanical parts and hand-soldered circuits. The project was part of a Maker mentoring initiative."
      },
      {
        "id": 17,
        "title": "Ferry Management System",
        "description": "A web-based system for managing ferry schedules, bookings, and real-time passenger-driver coordination.",
        "image": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["PHP", "Bootstrap", "MySQL", "HTML"],
        "year": 2019,
        "confidential": false,
        "category": "Personal",
        "role": "Full Stack",
        "flowchart": "",
        "details": "Developed a PHP-based platform to manage ferry operations including driver and passenger assignment, live ferry status updates, and SMS notifications. The system supported real-time coordination and ticket handling, helping streamline ferry management for local operators."
      },
      {
        "id": 18,
        "title": "Library Management System",
        "description": "A desktop-based system for managing library book inventory, borrowing, and returns using C++.",
        "image": "",
        "livelink": "",
        "sourcelink": "https://github.com/your-repo/library-management",
        "techstack": ["C++"],
        "year": 2020,
        "confidential": false,
        "category": "Personal",
        "role": "Desktop Developer",
        "flowchart": "",
        "details": "Designed a basic yet functional library management system using C++ with file handling to manage book checkouts, user records, and due tracking. Built with an emphasis on user-friendly input and clean menu-driven interfaces, suitable for small libraries or academic demos."
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
