"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data";
import { notFound } from "next/navigation";
import {FolderArchiveIcon, Github, ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";

type paramsId = Promise<{ id: string }>;

export default async function ProjectDetail(props:{params:paramsId}) { 
  const { id } = await props.params;
  const project = data.projects.projects.find((p) => (p.id) === parseInt(id));

  if (!project) return notFound();

  const fallbackImage = "/img/demo.png";

  const techBadge = (tech: string) => {
    const badgeMap: Record<string, string> = {
      "TypeScript": "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
      "PHP": "https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white",
      "Laravel": "https://img.shields.io/badge/Laravel-E74430?style=flat&logo=laravel&logoColor=white",
      "Django": "https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",
      "Node.js": "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
      "Next.js": "https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white",
      "Milvus": "https://img.shields.io/badge/Milvus-20B8C5?style=flat&logo=milvus&logoColor=white",
      "LLMs": "https://img.shields.io/badge/LLMs-663399?style=flat&logo=openai&logoColor=white",
      "Python": "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
      "MySQL": "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",
      "PostgreSQL": "https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white",
      "MongoDB": "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white",
      "Java": "https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white",
      "Spring Boot": "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=springboot&logoColor=white",
      "React": "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black",
      "Redux": "https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white",
      "JavaScript": "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
      "Vue.js": "https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white",
      "HTML": "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white",
      "CSS": "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white",
      "Bootstrap": "https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white",
      "C++": "https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white",
      "C": "https://img.shields.io/badge/C-A8B9CC?style=flat&logo=c&logoColor=black",
      "OpenCV": "https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=opencv&logoColor=white",
      "Arduino": "https://img.shields.io/badge/Arduino-00979D?style=flat&logo=arduino&logoColor=white",
      "Tkinter": "https://img.shields.io/badge/Tkinter-FFDD44?style=flat&logo=python&logoColor=black",
      "Apache PySpark": "https://img.shields.io/badge/PySpark-E25A1C?style=flat&logo=apachespark&logoColor=white",
      "Socket.io": "https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white",
      "Raspberry Pi": "https://img.shields.io/badge/Raspberry%20Pi-C51A4A?style=flat&logo=raspberrypi&logoColor=white",
      "Google Assistant API": "https://img.shields.io/badge/Google%20Assistant-4285F4?style=flat&logo=googleassistant&logoColor=white",
      "OpenAI API": "https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white",
      "Messenger API": "https://img.shields.io/badge/Messenger-0084FF?style=flat&logo=messenger&logoColor=white",
      "Voice Recognition": "https://img.shields.io/badge/Voice%20Recognition-333333?style=flat&logo=googlevoice&logoColor=white",
      "Face Recognition": "https://img.shields.io/badge/Face%20Recognition-303F9F?style=flat&logo=faceplusplus&logoColor=white",
      "RAG": "https://img.shields.io/badge/RAG-9146FF?style=flat&logo=openai&logoColor=white",
      "LangChain": "https://img.shields.io/badge/LangChain-00B4D8?style=flat&logo=langchain&logoColor=white",
      "2D Design": "https://img.shields.io/badge/2D%20Design-555555?style=flat&logo=sketch&logoColor=white",
      "3D Modeling": "https://img.shields.io/badge/3D%20Modeling-FF6F00?style=flat&logo=blender&logoColor=white"
    };
    
    return badgeMap[tech] || `https://img.shields.io/badge/${tech.replace(/ /g, "%20")}-gray?style=flat`;
  };

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full mb-6">
        <Link href="/projects" className="text-sm text-primary-foreground hover:underline">
          ← Back to Projects
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-center text-2xl md:text-5xl my-8">
        <span className="text-gradient-primary">{"-{ "}</span>
        {project.title}
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      
      {project.description && (
        <p className="text-center text-muted-foreground text-sm md:text-base max-w-3xl mb-16">
          {project.description}
        </p>
      )}

      <motion.div layout className="w-full h-fit p-4 rounded-xl bg-muted border overflow-hidden">
            <div className="flex justify-between flex-shrink-0 mb-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FolderArchiveIcon size={18} />
                <span className="hidden md:inline">{project.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="block rounded-full size-3 bg-green-500 ml-auto" />
                <span className="block rounded-full size-3 bg-yellow-500" />
                <span className="block rounded-full size-3 bg-red-500 " />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
              <div className="relative md:col-span-2">
                <Image
                  src={project.image || fallbackImage}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-xl border-[4px] border-muted object-contain w-full"
                />
              </div>

              {/* Right (1/3) - Info Section */}
              <div className="flex flex-col  gap-4">

              <div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techstack.map((tech, idx) => (
                      <img key={idx} src={techBadge(tech)} alt={tech} className="h-6" />
                    ))}
                  </div>
                </div>

                {/* Project Type */}
                {project.category && (
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">Project Type</h3>
                    <p className="text-muted-foreground text-sm">{project.category}</p>
                  </div>
                )}

                {/* Links */}
                {(project.sourcelink || project.livelink)&& ( <div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Links</h3>
                  <div className="flex gap-4 text-lg">
                    {project.sourcelink && (
                      <a
                        href={project.sourcelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                        title="Source Code"
                      >
                        <Github />
                      </a>
                    )}
                    {project.livelink && (
                      <a
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                        title="Live Demo"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>)}
               
                {project.role && (
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">My Role</h3>
                    <p className="text-muted-foreground text-sm">{project.role}</p>
                  </div>
                )}
                
              </div>
            </div>

            {/* Details / Description */}
            {project.details && (
              <div>
                <h3 className="font-semibold text-primary-foreground mb-2">Project Description</h3>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed text-justify indent-8">     
                {project.details}
                </div>
                {/* Flowchart Section */}
                {project.flowchart && (<div className="m-auto w-[80%] flex items-center max-w-4xl my-8">
                  <Image
                      src={project.flowchart || fallbackImage}
                      alt={project.title}
                      width={1000}
                      height={600}
                      className="object-contain w-full"
                    />
                </div>)}
              </div>
              )}

            
      </motion.div>
      

      
    </div>
  );
}
