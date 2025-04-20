"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  useCurSection(ref, 0.1);

  // Track which cert is open (null = none)
  const [openCert, setOpenCert] = useState<{
    name: string;
    src: string;
  } | null>(null);

  // Replace this with your actual certifications array
  const certs = data.certifications.lists; 

  return (
    <section
      ref={ref}
      id="certifications"
      className="w-full bg-muted/20 py-16 px-4 md:px-12 flex flex-col items-center"
    >
      <h1 className="mb-12 pt-8 text-center text-2xl md:text-5xl">
        <span className="text-gradient-primary">{"-{ "}</span>
        Certifications
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      <Marquee pauseOnHover autoFill gradient={false}>
        <div className="flex gap-8 items-center px-4">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="w-64 h-40 bg-background/10 border border-border rounded-lg cursor-pointer transition hover:bg-transparent"
              onClick={() => setOpenCert(cert)}
            >
              <Image
                src={cert.src}
                alt={cert.name}
                width={500}
                height={200}
                className=" w-full h-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </Marquee>

      {/* Modal Preview */}
      {openCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-400 bg-opacity-50">
          
          <div className="relative  bg-white rounded-lg p-4 max-w-2xl mx-4 w-full">
            <button
              onClick={() => setOpenCert(null)}
              className="absolute top-4 right-8 text-muted-foreground hover:text-primary transition"
            >
              <span className="text-xl">✕</span>
            </button>
            <p className="text-center text-sm px-8 text-black">
              {openCert.name}
          </p>
            <Image
              src={openCert.src}
              alt={openCert.name}
              width={800}
              height={600}
              className="object-contain w-full h-auto p-4"
            />
            
          </div>
        </div>
      )}
    </section>
  );
}
