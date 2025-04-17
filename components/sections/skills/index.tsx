"use client";

import React, { useRef } from "react";
import useCurSection from "@/hooks/use-cur-section";
import {
  Code,
  Cpu,
  GitPullRequest,
  Database,
  Clipboard,
  BarChart2,
  Zap,
  Search,
} from "lucide-react";

export default function SkillsHighlight() {
  const ref = useRef<HTMLElement>(null);
  useCurSection(ref, 0.1);

  const highlights = [
    { title: "Fullstack Development", Icon: Code },
    { title: "AI Integration", Icon: Cpu },
    { title: "API", Icon: GitPullRequest },
    { title: "DB Management", Icon: Database },
    { title: "Project Management", Icon: Clipboard },
    { title: "Tools & Analytics", Icon: BarChart2 },
    { title: "CI/CD Deployment", Icon: Zap },
    { title: "Research & Development", Icon: Search },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="w-full bg-muted/20 py-16 px-4 md:px-12 flex flex-col items-center"
    >
      <h1 className="mb-12 text-center text-3xl md:text-5xl">
        <span className="text-gradient-primary">{"-{ "}</span>
        Core Skills
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mx-auto">
        {highlights.map(({ title, Icon }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-3 p-6 bg-background/10 border border-border rounded-2xl transition hover:bg-background/20"
          >
            <Icon className="w-10 h-10 text-primary" />
            <span className="text-sm font-medium text-muted-foreground text-center">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
