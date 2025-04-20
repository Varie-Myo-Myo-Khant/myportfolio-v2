"use client";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
const LaptopAnimation = dynamic(() => import("@/components/sections/recent-projects/laptop-animation"), { ssr: false });
const ProjectCard = dynamic(() => import("@/components/sections/recent-projects/project-card"), { ssr: false });
import data from "@/data";

const FILTERS = ["All", "Work", "Freelance"];

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = data.projects.projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category?.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="w-full py-12 px-6 container text-sm md:text-base">
      <div className="text-center relative mb-8">
        <Image
          className="absolute top-2 -z-10 text-transparent opacity-30 w-full h-full object-cover"
          src="/img/grid.svg"
          alt="grid image"
          width={0}
          height={0}
        />
        <h1 className="text-3xl md:text-5xl mb-6">
          <span className="text-gradient-primary">{"-{ "}</span>
          Projects
          <span className="text-gradient-primary">{" }-"}</span>
        </h1>
        <LaptopAnimation className="w-[300px] -scale-x-100 mx-auto mb-1" />
        <p className="text-muted-foreground max-w-xl mx-auto">
        A mix of everything I’ve built — personal, freelance, and pro work.
        Filter and explore what I’ve been crafting lately.
        </p>
      </div>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center  mb-16">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2  border ${
              activeFilter === filter
                ? "bg-gradient-primary -gradient-primary"
                : "bg-transparent border-gradient-primary hover:bg-gradient-primary hover:-gradient-primary"
            } transition-all`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <SessionProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SessionProvider>
    </div>
  );
}
