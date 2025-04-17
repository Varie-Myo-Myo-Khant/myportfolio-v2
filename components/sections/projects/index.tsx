"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import LaptopAnimation from "./laptop-animation";
import { useRouter } from "next/navigation";
import ProjectCard from "./project-card";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";

export default function ProjectsSection() {
  const router = useRouter();
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div ref={ref} id="projects" className="w-full py-12 px-6 flex justify-between flex-col items-center lg:flex-row lg:items-stretch gap-10 container mt-32 text-sm md:text-base">
      <div>
        <div className="sticky top-8 text-center">
         
          <Image className="absolute top-20 -z-10 text-transparent opacity-30 w-full h-1/2 object-cover" src="/img/grid.svg" alt="grid image" width={0} height={0} />
          <h1 className="text-center text-3xl md:text-5xl mb-12">
                <span className="text-gradient-primary">{"-{ "}</span>
                Projects
                <span className="text-gradient-primary">{" }-"}</span>
            </h1>
          <LaptopAnimation className="w-[300px] -scale-x-100 scale-y-100 mx-auto  lg:mx-0" />
          <p className="lg:w-[400px] text-muted-foreground text-center">{data.projects.description}</p>
          <div className="space-x-4 mt-3">
                <a
                    href="/projects"
                    className="text-gradient-primary hover:text-white"
                >
                    🚀 Explore All Projects
                </a>
    
                </div>
        </div>
      </div>
      <div className="space-y-[5vh]">
      <SessionProvider>
        {data.projects.projects.map((project) => (
          project.id < 6 && (
            <ProjectCard key={project.title} project={project} />
          )
          
        ))}
        </SessionProvider>
      </div>
    </div>
  );
}
