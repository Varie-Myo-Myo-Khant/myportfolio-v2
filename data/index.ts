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
        "title": "Wordflow AI",
        "description": "A content creation SaaS platform powered by LLMs with tools for writing, rewriting, translation, and brand voice customization.",
        "video": "",
        "livelink": "https://wordflow.ai/",
        "sourcelink": "",
        "techstack": ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "LangChain", "RAG Pipeline", "Stripe", "Hostinger"],
        "year": 2025,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack, AI Integration",
        "flowchart": ["/img/projects/wf1.png", "/img/projects/wf2.png","/img/projects/wf3.png"],
       "details": "<h2>Overview</h2><p>Wordflow AI is an MVP-stage SaaS platform designed to assist users in generating, rewriting, translating, and managing brand-aligned content using advanced language models. It is tailored for content creators, marketers, and teams who want to streamline their writing workflow with AI assistance.</p><h2>Tech Stack & Architecture</h2><p>The application is built on the MERN stack (MongoDB, Express.js, React, Node.js) and deployed via Hostinger. It features AI integrations using OpenAI API, LangChain, and Retrieval-Augmented Generation (RAG) pipelines. Stripe is integrated for subscription billing, and key AI tools are wrapped in modular services for scalability and maintainability.</p><h2>My Contributions</h2><p>As a freelance full-stack and AI developer, I led the development of core features including AI Writer, Rewriter, Translator, and Brand Voice context integration. I developed CRUD APIs, handled file uploads and prompt engineering, implemented user experience enhancements, and established a scalable structure for future modules.</p><h2>Outcomes</h2><p>Wordflow AI is in its MVP phase and preparing for public release. The product is functionally complete for core features, with ongoing polishing and testing. My contributions have accelerated the platform's readiness for launch and set the foundation for future AI-powered innovations.</p>"
      },
      {
        "id": 2,
        "title": "NextHub AI",
        "description": "Supporting the development of an AI automation platform through web development and system integration efforts, with a focus on early-stage R&D.",
        "video": "",
        "livelink": "https://www.nexthub.ai/",
        "sourcelink": "",
        "techstack": ["Make.com", "N8N", "Webflow", "Custom Scripts", "AI Integration", "Automation R&D"],
        "year": 2025,
        "confidential": true,
        "category": "Freelance",
        "role": "Automation & Support Developer",
        "flowchart": ["/img/projects/nh1.png","/img/projects/nh2.png"],
        "details": "<h2>Overview</h2><p>NextHub AI is an emerging AI-powered automation platform focused on simplifying business workflows using low-code tools and intelligent integrations. Still in its early stages, the project aims to create an all-in-one solution for task automation, communication flows, and AI-assisted processes.</p><h2>Research & Technical Process</h2><p>My current focus includes technical research and prototype development for automation pipelines using tools like Make.com, N8N, and custom scripts. I am also contributing to the Webflow-based website setup and exploring integration strategies with AI services and communication platforms.</p><h2>My Contributions</h2><p>As a freelance developer, I’m involved in early-stage planning, AI integration exploration, and automation flow design. I assist in building foundational systems, evaluating tool compatibility, and experimenting with prototypes to guide development decisions.</p><h2>Outcomes</h2><p>The project is in stealth mode and currently in its R&D phase. Contributions so far have helped validate initial concepts, outline automation use cases, and establish a technical groundwork for future development and scaling.</p>"
      },
      {
        "id": 3,
        "title": "Food Buddy AI Chatbot",
        "description": "An MVP-stage Burmese-language AI chatbot that offers food recommendations tailored to user preferences, location, and budget via Messenger.",
        "video": "/img/projects/fbv.mp4",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Django", "Milvus", "LLMs", "Messenger API", "OpenAI API", "LangChain", "RAG", "Admin Dashboard"],
        "year": 2024,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack, AI Integration",
        "flowchart": ["/img/projects/fb3.png","/img/projects/fb1.png","/img/projects/fb2.png","/img/projects/fb4.png"],
        "details": "<h2>Overview</h2><p>Food Buddy AI is a personalized food recommendation chatbot designed for Burmese users. The MVP is built for Facebook Messenger and uses AI to deliver suggestions based on user preferences, location, and price range. It aims to enhance the local dining experience through intelligent, language-aware interactions.</p><h2>Architecture & Technical Process</h2><p>The system leverages a RAG (Retrieval-Augmented Generation) pipeline with LangChain and Milvus for semantic search, while OpenAI's GPT model handles conversational generation. A Django backend powers APIs, a custom admin dashboard, and controls data ingestion. The chatbot integrates with Messenger for real-time conversations in Burmese.</p><h2>My Contributions</h2><p>I led backend development, AI integration, and system architecture. My work included implementing the full RAG pipeline, building dynamic admin tools for uploading restaurant data and updating embeddings, managing model selection and deployment, and controlling user interaction flows.</p><h2>Outcomes</h2><p>This MVP successfully demonstrated localized AI chatbot capabilities in Burmese. Admin features allowed for easy dataset management and model updates. The project laid the groundwork for expanding into location-aware restaurant recommendations and multi-platform support in the next phase.</p>"
      },
      {
        "id": 4,
        "title": "GoGo: Smart Activity Planner",
        "description": "A localized AI-powered daily activity planner designed for elderly users in Myanmar, focusing on emotional well-being and engagement through personalized routines.",
        "video": "/img/projects/sm.mp4",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["React.js", "Django", "Milvus", "LLMs", "OpenAI API", "LangChain", "RAG", "Survey Tools", "Design Thinking"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Full Stack, Team lead, AI Integration, Project Analyst",
        "flowchart": ["/img/projects/sm1.png","/img/projects/sm2.png","/img/projects/sm3.png","/img/projects/sm4.png"],
        "details": "<h2>Overview</h2><p>GoGo is an intelligent activity planning system developed at Mascot ML, aimed at supporting the emotional and social well-being of elderly people in Myanmar. The system offers culturally and linguistically localized recommendations for daily activities based on user personas, preferences, and emotional context.</p><h2>Research & Technical Process</h2><p>The development process began with user research and ethnographic interviews, followed by survey collection and data analysis using Pandas. After comparing traditional ML models with modern AI techniques, we selected a RAG (Retrieval-Augmented Generation) architecture using LangChain, Milvus, and OpenAI. The backend was developed in Django and integrated with a clean, accessible frontend using Next.js, tailored for elderly users with large fonts and simple navigation.</p><h2>My Contributions</h2><p>I led the project end-to-end as the team lead and full stack engineer. Responsibilities included survey design and field research with elderly users, data cleaning and ETL processing, design thinking workshops, backend and frontend development, and AI model experimentation. I also oversaw user testing and iteration based on real feedback from elderly participants.</p><h2>Outcomes</h2><p>Successfully built and tested an MVP that was well-received by elderly users. The RAG-based approach outperformed traditional recommendation models and offered more engaging, context-aware suggestions. The localized UI and voice/text feedback loop showed promise in reducing loneliness and promoting activity engagement among elderly participants.</p>"
      },
      {
        "id": 5,
        "title": "Telecom Broadband System",
        "description": "A modular telecom platform supporting broadband operations, backend management, and fraud protection with real-time API processing and multi-role workflows.",
        "video": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL", "Kernel Scheduler", "3-Layer Architecture", "CMS", "Logging", "API Security"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Full Stack",
        "flowchart": ["/img/projects/bb1.png","/img/projects/bb2.png","/img/projects/bb3.png","/img/projects/bb4.png"],
       "details": "<h2>Overview</h2><p>This was Atom’s core telecom backend system powering broadband subscription flows, sales operations, multi-role user access, and customer support workflows. The system followed a strict 3-layer architecture—frontend, utility (API), and database zone—ensuring modularity and secure communication across all services.</p><h2>Architecture & Implementation</h2><p>All modules interacted via secured APIs—frontend never accessed the database directly. I worked on Laravel-based backend logic, implemented real-time data updates, and managed scheduled jobs using the kernel scheduler. Logging and error handling were emphasized to improve observability and debugging.</p><h2>My Contributions</h2><p><ul> <li>Data quota management and payment issue maintenance.</li> <li>Maintained and developed new features across broadband subscription, complaint handling, and internal CMS modules.</li>  <li>Handled real-time SLA dashboards and backend API logic for customer ticketing and issue resolution.</li>  <li>Implemented features like bulk ticket close for large-scale support cases and day-replacement logic after network outages.</li>  <li>Managed backend task scheduling using Laravel’s kernel scheduler for daily operations and maintenance flows.</li>  <li>Led operational support, API testing, and handled system-wide logging/error tracking for production incidents.</li>  <li>Minipro: GB Fraud - Users fraudulently redeemed 30GB before purchasing eligible devices due to leaked device lists.Solution: Introduced a secure redeem code system requiring both device ID and purchase-linked code. Updated backend redeem logic, CMS tools, and the website form to validate and manage claims.</li><li>Occasional Promotion and Campaign Tasks </li></ul></p><h2>Outcomes</h2><p>Helped ensure the platform’s resilience against misuse, improved support workflows, and reduced SLA response times. My contributions protected revenue integrity and enhanced maintainability of one of Atom’s most critical internal platforms.</p>"
      },
      {
        "id": 6,
        "title": "B2B Sale Application",
        "description": "An internal sales platform for telecom agents to manage broadband and device sales, SIM registration, and sales performance tracking.",
        "video": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Laravel", "PHP", "MySQL", "Google Maps API", "SMSC", "Payment Gateway"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Backend",
        "flowchart": ["/img/projects/bs1.png","/img/projects/bs2.png","/img/projects/bs3.png","/img/projects/bs4.png"],
        "details": "<h2>Overview</h2>\n<p>\n  A web-based internal sales platform developed for Atom's b2b sale team, enabling agents to sell broadband and devices, manage SIM registrations, and track performance through dashboards. The system supports real-time coordination between on-ground sales reps and back-office operations.\n</p>\n\n<h2>Development & Technical Approach</h2>\n<p>\n  Built using Laravel and MySQL, the system adhered to Atom’s 3-layer architecture with clearly separated frontend, utility (API), and database layers. APIs handled all data transactions, ensuring security and modularity. The backend was extended to support multiple internal sales tools and integrations.\n</p>\n\n<h2>My Contributions</h2><p><ul>\n  <li>Maintained and developed new features like sales reward programs and B2B SIM card registration workflow.</li>\n  <li>Implemented marketplace features for cross-selling broadband and devices across other market platforms.</li>\n  <li>Optimized sales dashboards for better performance and agent usability.</li>\n  <li>Resolved operational issues and implemented improvements based on field sales team feedback.</li>\n  <li>Integrated Google Maps API for marking and validating serviceable locations during SIM registration.</li>\n  <li>Supported integrations with SMSC and other telecom payment gateways.</li>\n</ul></p><h2>Outcomes</h2>\n<p>\n  Enabled efficient SIM and broadband sales workflows across the company, improved field agent productivity, reduced processing delays, and added greater visibility to service coverage and performance metrics.\n</p>"
      },
      {
        "id": 7,
        "title": "Billing & Reporting System",
        "description": "An internal billing and reporting tool for handling broadband postpaid customers, corporate invoices, payment reconciliation, and SQL-based analytics support.",
        "video": "",
        "livelink": "",
        "sourcelink": "",
        "techstack": ["Laravel", "MySQL", "SQL", "Internal API"],
        "year": 2024,
        "confidential": true,
        "category": "Work",
        "role": "Full Stack",
        "flowchart": ["/img/projects/ob1.png","/img/projects/ob2.png","/img/projects/ob3.png","/img/projects/ob4.png",],
        "details": "<h2>Overview</h2>\n<p>\n  This internal system was part of Atom's telecom operations, focusing on postpaid broadband billing, corporate account management, reconciliation tracking, and reporting automation across departments.\n</p>\n\n<h2>Development & Technical Approach</h2>\n<p>\n  Built with Laravel and MySQL, the system integrated seamlessly with other broadband and sales systems using internal APIs. Emphasis was placed on backend data processing and SQL-heavy logic to support real-time operations, invoice generation, and error correction.\n</p>\n\n<h2>My Contributions</h2><p><ul>\n  <li>Developed an <strong>aging function</strong> to track and generate monthly invoices for corporate postpaid customers based on payment history.</li>\n  <li>Implemented CRUD APIs to sync corporate customer data from the broadband platform.</li>\n  <li>Built a <strong>payment reconciliation module</strong> to identify and resolve mismatches in customer payments.</li>\n  <li>Created a <strong>monthly reporting system</strong> to automate and distribute billing summaries to relevant departments.</li>\n  <li>Performed extensive <strong>SQL-based data handling</strong> for urgent internal reports and operational audits.</li>\n</ul></p><h2>Outcomes</h2>\n<p>\n  Significantly improved billing accuracy and reduced manual intervention for finance and support teams. Enabled faster report generation, better corporate account tracking, and streamlined collaboration across teams.\n</p>"
      },
      {
        "id": 9,
        "title": "Japanese CMS Websites",
        "description": "A collection of corporate and product websites developed and optimized using modern CMS platforms tailored for Japanese tech companies.",
        "video": "",
        "livelink": "https://www.dxable.com/",
        "sourcelink": "",
        "techstack": ["WordPress", "Webflow", "Ghost", "Headless CMS", "Strapi", "Gatsby", "Figma", "UI/UX", "SEO", "Google Search Console", "SERanking"],
        "year": 2022,
        "confidential": true,
        "category": "Work",
        "role": "Full Stack",
        "flowchart": ["/img/projects/w1.png","/img/projects/w2.png","/img/projects/w3.png","/img/projects/w4.png","/img/projects/w5.png","/img/projects/w6.png"],
        "details": "<h2>Overview</h2><p>Worked on multiple corporate websites for Japanese clients including generatived.com, dxable.com, and implementdigital.com. The focus was on delivering highly responsive and fast-loading CMS-based websites using both traditional and headless CMS technologies.</p><h2>Development & Optimization Process</h2><p>Implemented site structures using Ghost, Webflow, and WordPress depending on client needs. For projects requiring scalability and performance, headless CMS solutions like Strapi with Gatsby were adopted. UI/UX was optimized through close collaboration with designers using Figma. Additionally, SEO improvements were made through audits and real-time monitoring tools such as SERanking and Google Search Console.</p><h2>My Contributions</h2><p>I led the development and maintenance of all CMS websites, collaborating with design and content teams to refine UX flows. Handled the full deployment and monitoring process, including performance tuning and SEO optimization. Managed hosting and ensured high availability of all sites.</p><h2>Outcomes</h2><p>Improved website performance and mobile responsiveness across all platforms. Boosted SEO visibility by over 20% through optimized content structure and search indexing. Contributed to enhanced user engagement and reduced bounce rates through effective UI/UX adjustments.</p>"
      },
      {
        "id": 10,
        "title": "Image Compression System",
        "description": "A desktop-based Python tool for experimenting with lossy and lossless image compression algorithms, including RLE and Huffman coding.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Varie-Myo-Myo-Khant/loseless.git",
        "techstack": ["Python", "OpenCV", "Tkinter", "RLE", "Huffman Coding"],
        "year": 2023,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack",
        "flowchart": ["/img/projects/ll1.png","/img/projects/ll2.png","/img/projects/ll3.png","/img/projects/ll4.png"],
        "details": "<h2>Overview</h2>\n<p>\n  This project was a collaboration with a researcher to support learning and demonstration of image compression techniques in a user-friendly desktop application.\n</p>\n\n<h2>Development & Technical Approach</h2>\n<p>\n  Built with Python, Tkinter, and OpenCV, the tool allowed users to apply basic filters and explore cartoonification, grayscale, and real-time compression methods. Focus was placed on implementing lossless algorithms such as Run-Length Encoding (RLE) and Huffman coding for educational purposes.\n</p>\n\n<h2>My Contributions</h2><p><ul>\n  <li>Implemented and tested <strong>lossless image compression algorithms</strong> (RLE and Huffman).</li>\n  <li>Built a <strong>Tkinter-based GUI</strong> for selecting and previewing compression modes.</li>\n  <li>Helped with <strong>data visualization and debugging</strong> for academic understanding of compression effects.</li>\n  <li>Collaborated with a researcher to <strong>document code</strong> and explain concepts for learning materials.</li>\n</ul></p><h2>Outcomes</h2>\n<p>\n  Successfully supported academic research and helped in understanding image compression workflows, contributing to both the tool’s functionality and its educational value.\n</p>"
      },
      {
        "id": 11,
        "title": "I-mage: AI Image Processing App",
        "description": "A Python-based desktop tool with multiple AI image processing features including filters, cartoonification, and text extraction.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/I-mage-Main",
        "techstack": ["Python", "OpenCV", "Tkinter"],
        "year": 2023,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack",
        "flowchart": ["/img/projects/i1.png","/img/projects/i2.png","/img/projects/i3.png","/img/projects/i4.png","/img/projects/i5.png",],
        "details": "<h2>Overview</h2>\n<p>\n  I-mage is an offline desktop application designed to demonstrate and apply AI-powered image processing techniques in an intuitive and educational interface.\n</p>\n\n<h2>Development & Technical Approach</h2>\n<p>\n  Built entirely with Python, Tkinter for UI, and OpenCV for image manipulation, the app provides various image enhancements and visual transformations in real-time.\n</p>\n\n<h2>My Contributions</h2><p><ul>\n  <li>Developed core features such as <strong>image-to-text conversion</strong>, <strong>grayscale and cartoon filters</strong>, and <strong>edge detection</strong>.</li>\n  <li>Implemented <strong>brightness and contrast control sliders</strong> for real-time adjustments.</li>\n  <li>Designed a <strong>user-friendly Tkinter interface</strong> to ensure usability for non-technical users.</li>\n  <li>Integrated all image transformations with <strong>OpenCV backend</strong> and optimized for local processing.</li>\n</ul></p><h2>Outcomes</h2>\n<p>\n  The tool was used successfully in educational demos and as a self-contained offline image lab for users to explore basic computer vision and AI concepts.\n</p>"
      },
      {
        "id": 12,
        "title": "SalesCraft Pro: Intelligent Retail Suite",
         "description": "A full-stack retail management system built for small shop owners, combining POS, inventory tracking, and sales analytics in one user-friendly web platform.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/SalesCraft-Pro-Intelligent-Retail-Suite",
        "techstack": ["Java", "Spring Boot", "MongoDB", "React", "Redux"],
        "year": 2023,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack",
        "flowchart": ["/img/projects/sc1.png","/img/projects/sc2.png","/img/projects/sc3.png","/img/projects/sc4.png","/img/projects/sc5.png","/img/projects/sc6.png","/img/projects/sc7.png","/img/projects/sc8.png","/img/projects/sc9.png","/img/projects/sc10.png",],
       "details": "<h2>Overview</h2>\n<p>\n  SalesCraft Pro is a web-based information system developed for a local convenience store to modernize its operations through intelligent automation. It addresses a significant market gap in user-friendly and robust solutions for small-to-medium retail businesses, often underserved by complex or overpriced enterprise software.\n</p>\n\n<h2>Development & Technical Approach</h2>\n<p>\n  The application is a full-stack system built with Spring Boot for backend services, MongoDB for flexible document storage, and React with Redux for frontend state management. It supports secure user roles, responsive UI, and real-time dashboard updates.\n</p>\n\n<h2>My Contributions</h2><p><ul>\n  <li>Designed and implemented the entire application architecture, including frontend, backend, and database schema.</li>\n  <li>Built a robust inventory management module with dynamic stock updates, reorder alerts, and barcode integration.</li>\n  <li>Developed a POS module for day-to-day sales transactions with receipt generation and daily summaries.</li>\n  <li>Created an intuitive sales dashboard for real-time tracking and analytics of sales trends, customer data, and product performance.</li>\n  <li>Implemented secure login, role-based access, and session management.</li>\n  <li>Integrated advanced reporting features for monthly and category-based sales insights.</li>\n</ul></p><h2>Outcomes</h2>\n<p>\n  The shop owner was able to replace manual and error-prone spreadsheets with a secure, real-time system. The tool improved sales tracking, reduced stock discrepancies, and provided actionable business insights—boosting operational efficiency and customer satisfaction.\n</p>"

      },
      {
        "id": 13,
        "title": "Market Basket Analysis Platform",
       "description": "An analytics tool built to enhance POS systems with customer segmentation and product bundling strategies through machine learning algorithms.",
        "video": "",
        "livelink": "https://docs.google.com/presentation/d/1Y4RV3qDJM_SbH9MLNPkVxgNQQUyliyDgdO_zNLO7LxA/edit?slide=id.g131ff7c0f5b_0_254#slide=id.g131ff7c0f5b_0_254",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/e-commerce-behavioral-analysis",
        "techstack": ["Python", "Apache PySpark", "PostgreSQL"],
        "year": 2023,
        "confidential": true,
        "category": "Freelance",
        "role": "Data Analyst / Backend",
        "flowchart": ["/img/projects/b1.png","/img/projects/b2.png","/img/projects/b3.png","/img/projects/b4.png","/img/projects/b5.png","/img/projects/b6.png","/img/projects/b7.png","/img/projects/b8.png","/img/projects/b9.png"],
        "details": "<h2>Overview</h2>\n<p>\n  This platform was developed to enhance an existing POS system with data-driven insights, using market basket analysis and customer segmentation techniques. It targeted smarter cross-selling strategies and customer personalization for small e-commerce businesses.\n</p>\n\n<h2>Development & Technical Approach</h2>\n<p>\n  Built using Python and PySpark for handling large-scale transactional data efficiently. PostgreSQL was used to store and manage processed analytical data. The system integrated seamlessly with retail POS logs and enabled scalable customer intelligence insights.\n</p>\n\n<h2>My Contributions</h2><p><ul>\n  <li>Implemented the FP-Growth algorithm to identify Items Frequently Bought Together and generate association rules for bundling suggestions.</li>\n  <li>Developed a K-Means clustering pipeline for Customer Segmentation Based on Product Categories and purchase behaviors.</li>\n  <li>Built ETL workflows with PySpark to clean, process, and analyze large volumes of transaction data.</li>\n  <li>Designed PostgreSQL schemas to store analysis results and visualizable metrics for dashboard tools.</li>\n  <li>Delivered actionable insights on product pairing and customer targeting strategies for marketing and sales optimization.</li>\n</ul></p><h2>Outcomes</h2>\n<p>\n  Enabled the client to optimize product placement and promotional strategies, resulting in improved average basket size and better customer engagement. The insights contributed to enhanced POS system intelligence and long-term sales growth.\n</p>"
      },
      {
        "id": 14,
        "title": "Speech Recognition and Smart Door Lock System",
        "description": "An AI-powered home automation system that uses voice and facial recognition to securely control door access.",
        "video": "/img/projects/sd5.jpg",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Smart-Home",
        "techstack": ["Python", "Raspberry Pi", "OpenCV", "Google Assistant API", "Image Processing", "Speech Recognition"],
        "year": 2020,
        "confidential": false,
        "category": "Project Show",
        "role": "Embedded Developer",
        "flowchart": ["/img/projects/sd1.jpg","/img/projects/sd2.jpg","/img/projects/sd3.jpg","/img/projects/sd4.jpg"],
       "details": "<h2>Overview</h2><p>Exhibited at Maker Fair, this smart door lock system integrates voice recognition and facial authentication to automate secure access control. Built using Raspberry Pi, the system leverages real-time image processing and voice commands to manage door operations.</p><h2>Responsibilities</h2><p>Led the full development of the system—from hardware integration with Raspberry Pi to software implementation using Python, OpenCV, and Google Assistant API. Built the voice command workflow and face detection pipeline. Designed and tested the physical setup for a live demo environment.</p><h2>Outcome</h2><p>Successfully demonstrated a fully functional smart door prototype that combines AI and IoT. Received positive feedback at the Maker Fair for real-world applicability. Deepened my passion for physical product design and human-device interaction through this project.</p>"
      },
      {
        "id": 15,
        "title": "Hi-Find: Lost & Found Portal",
        "description": "A campus-focused Django web application with real-time Socket.io chat for reporting, tracking, and recovering lost items efficiently.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Varie-Myo-Myo-Khant/hi-find.git",
        "techstack": ["Python", "Django", "JavaScript", "Node.js", "Socket.io", "WebSockets", "MySQL", "HTML", "CSS"],
        "year": 2021,
        "confidential": true,
        "category": "Freelance",
        "role": "Full Stack",
        "flowchart": ["/img/projects/hf1.png","/img/projects/hf4.png","/img/projects/hf2.png","/img/projects/hf5.png","/img/projects/hf6.png"],
       "details": "<h2>Client Work</h2><p>Developed Hi-Find as a freelance service for a university client seeking a digital lost-and-found platform. The goal was to streamline the recovery process for misplaced items and enhance campus communication.</p><h2>Features & Stack</h2><p>The platform was built with Django as the main backend framework and integrated with a Node.js and Socket.io-powered real-time chat service. Users could report lost items, view found items, and instantly communicate with other users via WebSockets-based messaging. The database was structured in MySQL, and the frontend was created using HTML, CSS, and JavaScript.</p><h2>My Contributions</h2><p>I handled the full development cycle—from planning and architecture to deployment. I implemented authentication, role-based access, chat integration, and item recovery flows. The platform included admin management for reported items and automatic status updates upon item matching or retrieval.</p><h2>Outcome</h2><p>The client was highly satisfied with the solution, which was adopted successfully within their student services department. It improved lost-item recovery efficiency and provided a modern user experience aligned with their campus digitalization goals.</p>"
      },
      {
        "id": 16,
        "title": "Smart Robotic Car",
        "description": "An award-winning Arduino-powered robotic car developed for university competitions, featuring autonomous motion, obstacle detection, and a functional claw. Built with laser-cut and 3D-printed parts, combining full-cycle design, embedded programming, and team leadership.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Robotic-Car",
        "techstack": ["C", "Arduino", "3D Modeling", "2D Design", "Laser Cutting", "3D Printing", "Sensor Programming", "Embedded Systems"],
        "year": 2020,
        "confidential": false,
        "category": "Freelance",
        "role": "Embedded Developer",
        "flowchart": ["/img/projects/smc1.png","/img/projects/smc2.jpg","/img/projects/smc4.png","/img/projects/smc5.png","/img/projects/smc6.png","/img/projects/smc7.png"],
        "details": "<h2>Overview</h2><p>The Smart Robotic Car is an Arduino-powered autonomous vehicle developed for university-level robotics competitions. It featured motion control, obstacle detection, and a functional claw mechanism. The project integrated end-to-end product development—from mechanical design and fabrication to embedded programming and competition deployment.</p><h2>My Responsibilities</h2><p>I led the team through all phases of the project. I designed the chassis and mechanical parts using 3D modeling tools, then fabricated them using laser cutters and 3D printers. I also handled embedded C programming for the movement system, obstacle detection, and claw mechanism. Additionally, I managed the full project workflow, coordinated with teammates, and ensured that the robot was functional, reliable, and ready for competition.</p><h2>Outcomes</h2><p>The robotic car competed in two major competitions and won third place, demonstrating both technical capability and practical execution. The experience reinforced my passion for robotics and gave me a solid foundation in product development, teamwork, and real-world problem-solving in constrained timeframes. It remains one of the most formative and enjoyable projects I’ve led.</p>"
      },
      {
        "id": 17,
        "title": "University Search Engine",
        "description": "A standalone application that helps students search universities in Myanmar based on multiple filters and preferences.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Varie-Myo-Myo-Khant/University-Search-Engine.git",
        "techstack": ["Java", "Java Swing", "MySQL", "GUI Design", "Search Algorithm"],
        "year": 2019,
        "confidential": false,
        "category": "Personal",
        "role": "Backend / Desktop Developer",
        "flowchart": [],
        "details": "<h2>Overview</h2><p>The University Search Engine is a standalone desktop application developed to help students in Myanmar find universities that match their entrance exam scores, location preferences, and chosen fields of study. The application featured a user-friendly interface with real-time filtering and a localized experience to support students across the country during the admission process.</p><h2>My Responsibilities</h2><p>I led the project team and was responsible for designing and developing the core functionality. I implemented the GUI using Java Swing and structured the backend with MySQL for storing university data. I also built custom search logic to match universities based on entrance marks and other criteria, ensuring quick and relevant results. Additionally, I coordinated tasks among team members and oversaw the entire development process.</p><h2>Outcomes</h2><p>The tool successfully simplified the university selection process for students and was well-received in our academic community. It served as a practical demonstration of how technology can improve access to higher education information. The project enhanced my leadership, UI design, and database integration skills in a collaborative development environment.</p>"
      },
      {
        "id": 18,
        "title": "Drawing Machine",
        "description": "An automated machine that can replicate sketches and signatures using Arduino and motor control.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Drawing-Machine",
        "techstack": ["Arduino", "C", "Stepper Motors", "GRBL Firmware", "Inkscape", "Universal Gcode Sender", "Mechanical Design"],
        "year": 2019,
        "confidential": false,
        "category": "Personal",
        "role": "Embedded Developer",
        "flowchart": ["/img/projects/drawingmachine1.png","/img/projects/drawingmachine2.png","/img/projects/drawingmachine.gif","/img/projects/drawingmachine4.png"],
        "details": "<h2>Overview</h2><p>The Drawing Machine is a simple yet precise pen plotter designed to replicate digital sketches, text, and signatures on flat surfaces. It operates using an Arduino microcontroller, stepper motors, and hand-crafted mechanical components. The device supports a wide range of writing implements, including fountain pens, and can be used for design work, digital art reproduction, and signature automation. It was primarily built as a low-cost solution for students and makers looking to create designs without a printer.</p><h2>My Responsibilities</h2><p>I handled the full development of the machine, including circuit design, hand-soldering, mechanical assembly, and Arduino programming. I integrated GRBL firmware to interpret gcode and control motor movements, and utilized Inkscape to convert images into gcode files. I also configured the Universal Gcode Sender to communicate with the machine, enabling accurate motion in the X, Y, and Z directions.</p><h2>Outcomes</h2><p>The Drawing Machine successfully mimicked the basic functions of more complex tools like laser cutters, CNC routers, and 3D printers. It became a valuable learning project, helping me gain experience in motor control, firmware integration, mechanical design, and the fundamentals of digital fabrication. This project was part of a maker mentoring initiative and served as a stepping stone toward future hardware-based innovations.</p>"
      },
      {
        "id": 19,
        "title": "Ferry Management System",
        "description": "A web-based system for managing ferry schedules, bookings, and real-time passenger-driver coordination.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Varie-Myo-Myo-Khant/Ferrry-Management-System.git",
        "techstack": ["PHP", "Bootstrap", "MySQL", "HTML","CSS"],
        "year": 2019,
        "confidential": false,
        "category": "Personal",
        "role": "Full Stack",
        "flowchart": ["/img/projects/fms1.png","/img/projects/fms2.png","/img/projects/fms3.png","/img/projects/fms4.png"],
        "details": "<h2>Overview</h2><p>The Ferry Management System is a web-based application designed to streamline ferry operations, including scheduling, ticketing, driver and passenger coordination, and real-time updates. Built using PHP, MySQL, and Bootstrap, the platform offered an accessible interface for operators to manage routes and logistics efficiently.</p><h2>My Responsibilities</h2><p>I was responsible for implementing core features such as driver assignment and managing vehicle-student allocation. My work focused on creating intuitive interfaces for admins to assign drivers to ferries and link students to specific rides, ensuring accurate trip planning, passenger tracking and SMS,Email Notifications.</p><h2>Outcomes</h2><p>The system enabled better coordination between drivers and passengers through real-time updates and improved operational transparency. It also featured SMS notifications for important status changes. The project was showcased at a Project Fair, where it received positive attention for solving practical transport coordination problems in local contexts.</p>"
      },
      {
        "id": 20,
        "title": "Ran Rangoon: Yangon Guide",
        "description": "An informative web platform for exploring culture, food, and destinations across Yangon.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Varie-Myo-Myo-Khant/Ran-Rangoon.git",
        "techstack": ["JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Design", "UI/UX Design"],
        "year": 2018,
        "confidential": false,
        "category": "Personal",
        "role": "Frontend Developer",
        "flowchart": [],
       "details": "<h2>Overview</h2><p>Ran Rangoon is a directory-style static website built to help tourists and residents explore the culture, food, and destinations of Yangon. The platform features curated listings of attractions, local businesses, and cultural landmarks, making it a useful guide for newcomers to the city. Emphasis was placed on a clean design, mobile responsiveness, and intuitive navigation to ensure accessibility for all users.</p><h2>My Responsibilities</h2><p>I led the team during the development of this project, overseeing planning, design, and implementation. I was primarily responsible for building the frontend using HTML, CSS, JavaScript, and Bootstrap. I created reusable UI components, ensured full mobile responsiveness, and curated content to reflect the unique identity of Yangon. I also guided the team in aligning user experience with the needs of international and local users.</p><h2>Outcomes</h2><p>The project resulted in a functional and visually appealing website that served as a city guide for Yangon. It received positive feedback from early users for its usability and content layout. This experience further honed my frontend development and leadership skills, especially in coordinating a small team and delivering a product focused on user engagement and local culture promotion.</p>"
      },
      {
        "id": 21,
        "title": "Garbage Collector Robot",
        "description": "An automated Arduino-based robot designed to collect small objects and waste from indoor environments.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Ms-Myo-Myo-Khant/Garbage-Collector-Arduino-Project",
        "techstack": ["Arduino", "C", "IR Sensors", "Laser Cutting", "3D Printing", "2D Design", "Mechanical Design"],
        "year": 2018,
        "confidential": false,
        "category": "Personal",
        "role": "Embedded Developer",
        "flowchart": ["/img/projects/gc1.jpg","/img/projects/gc2.png"],
        "details": "<h2>Overview</h2><p>The Garbage Collector Robot is an Arduino-powered autonomous robot designed to collect small objects and waste from indoor environments. It uses infrared sensors for navigation and object detection, and mechanical arms to collect debris. The robot was developed within a 24-hour time constraint as part of a university Makerthon challenge, with the goal of promoting clean environments and showcasing rapid prototyping.</p><h2>My Responsibilities</h2><p>I led the end-to-end development of the robot, including designing the mechanical parts using 2D CAD tools for laser cutting and 3D printing. I programmed the Arduino using C to handle sensor inputs and control movement logic. The robot’s chassis and arms were fabricated using digital fabrication techniques, which sparked my deep interest in maker culture and hardware innovation.</p><h2>Outcomes</h2><p>The project was completed successfully within the Makerthon deadline and demonstrated functional waste collection in a controlled indoor setting. It received positive attention for its quick turnaround, practical purpose, and clean integration of electronics and mechanical design. This hands-on experience laid the foundation for future robotics and embedded system projects.</p>"
      },
      {
        "id": 22,
        "title": "Library Management System",
        "description": "A desktop-based system for managing library book inventory, borrowing, and returns using C++.",
        "video": "",
        "livelink": "",
        "sourcelink": "https://github.com/Varie-Myo-Myo-Khant/Library-Management-Sysytem-C-Group-Project.git",
        "techstack": ["C++"],
        "year": 2017,
        "confidential": false,
        "category": "Personal",
        "role": "C++ Developer",
        "flowchart": [],
        "details": "<h2>Overview</h2><p>The Library Management System is a desktop application built using C++ for small-scale libraries or academic institutions. It facilitates core library operations including inventory management, book borrowing, returns, and due tracking. Designed as a lightweight solution, it uses file handling for persistent storage without the need for external databases.</p><h2>My Responsibilities</h2><p>I was solely responsible for the design and development of the system. This included creating a menu-driven user interface, implementing file-based data storage for books and user records, and developing the logic for borrowing, returning, and tracking overdue books. I also ensured the input/output handling was intuitive for non-technical users.</p><h2>Outcomes</h2><p>The system served as a functional prototype suitable for small libraries, offering an easy-to-use interface and streamlined workflow. It also received positive feedback when used as a teaching tool in an academic environment to demonstrate basic system design and file handling in C++.</p>"
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
