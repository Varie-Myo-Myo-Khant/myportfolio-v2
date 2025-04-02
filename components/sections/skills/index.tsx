"use client";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function Skills() {
  const ref = useRef(null);
  useCurSection(ref,0.1);
  return (
    <div ref={ref} id="skills" className="flex gap-4 items-center flex-col pt-12 justify-center bg-muted w-full  overflow-hidden">
      <h1 className="text-center text-3xl md:text-5xl mb-12">
                <span className="text-gradient-primary">{"-{ "}</span>
                Skills
                <span className="text-gradient-primary">{" }-"}</span>
       </h1>
      <Marquee autoFill pauseOnClick>
        <div className="flex gap-4 items-center justify-center w-11/12 p-2">
          {data.technologies.skills.map((skill) => (
            <Link key={skill.name} href={skill.link} target="_blank" className="bg-background border size-[70px] md:size-[90px] flex items-center justify-center rounded-full overflow-hidden p-6 flex-shrink-0 hover:bg-border">
              <Image className="h-full w-auto" src={skill.src} alt={skill.name} width={50} height={50} />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
