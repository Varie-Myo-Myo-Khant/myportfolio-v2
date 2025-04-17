"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data";
import { notFound } from "next/navigation";
import { Github, ExternalLinkIcon } from "lucide-react";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = data.projects.projects.find(
    (p) => p.id.toString() === params.id
  );

  if (!project) return notFound();

  const fallbackImage = "/img/test.png";

  const techBadge = (tech: string) => {
    const badgeMap: Record<string, string> = {
      "TypeScript": "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
      "PHP": "https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white",
      "Laravel": "https://img.shields.io/badge/Laravel-E74430?style=flat&logo=laravel&logoColor=white",
      "Django": "https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",
      "Node.js": "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
      "Next.js": "https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white",
      "Milvus": "https://img.shields.io/badge/Milvus-20B8C5?style=flat&logo=milvus&logoColor=white",
      "LLMs": "https://img.shields.io/badge/LLMs-663399?style=flat&logo=OpenAI&logoColor=white"
    };
    return badgeMap[tech] || `https://img.shields.io/badge/${tech.replace(/ /g, "%20")}-gray?style=flat`;
  };

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full mb-6">
        <Link href="/#projects" className="text-sm text-primary hover:underline">
          ← Back to Projects
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-center text-2xl md:text-5xl mb-2">
        <span className="text-gradient-primary">{"-{ "}</span>
        {project.title}
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      {/* Short Description under title */}
      {project.description && (
        <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mb-10">
          {project.description}
        </p>
      )}

      {/* Image + Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
        {/* Left (2/3) - Image */}
        <div className="relative md:col-span-2">
          <Image
            src={project.image || fallbackImage}
            alt={project.title}
            width={1000}
            height={600}
            className="rounded-2xl shadow-xl border-[4px] border-muted object-contain w-full"
          />
          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 text-sm rounded-lg shadow hover:bg-primary/90 transition"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Right (1/3) - Info Section */}
        <div className="flex flex-col justify-between gap-6">
          {/* Project Type */}
          {project.category && (
            <div>
              <h3 className="font-semibold text-primary-foreground mb-2">Project Type</h3>
              <p className="text-muted-foreground text-sm">{project.category}</p>
            </div>
          )}

          {/* My Role */}
          {project.role && (
            <div>
              <h3 className="font-semibold text-primary-foreground mb-2">My Role</h3>
              <p className="text-muted-foreground text-sm">{project.role}</p>
            </div>
          )}

          {/* Links */}
          <div>
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
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, idx) => (
                <img key={idx} src={techBadge(tech)} alt={tech} className="h-6" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Details / Description */}
      {project.details && (<div className="max-w-3xl text-muted-foreground text-sm md:text-base leading-relaxed text-justify indent-8 mb-16">
        {project.details}
      </div>)}

      {/* Flowchart Section */}
      {project.flowchart && (<div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Project Flow</h2>
        <div className="w-full h-[300px] flex items-center justify-center border rounded-xl border-muted text-muted-foreground italic">
          {project.flowchart}
        </div>
      </div>)}
    </div>
  );
}
