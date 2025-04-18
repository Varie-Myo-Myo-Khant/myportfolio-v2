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
  // e.g. [{ name: "AWS Certified Solutions Architect", src: "/certs/aws.png" }, ...]

  return (
    <section
      ref={ref}
      id="certifications"
      className="w-full bg-muted/20 py-16 px-4 md:px-12 flex flex-col items-center"
    >
      <h1 className="mb-12 text-center text-3xl md:text-5xl">
        <span className="text-gradient-primary">{"-{ "}</span>
        Certifications
        <span className="text-gradient-primary">{" }-"}</span>
      </h1>

      <Marquee pauseOnHover autoFill gradient={false}>
        <div className="flex gap-8 items-center px-4">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="w-32 h-32 bg-background/10 border border-border rounded-lg flex items-center justify-center overflow-hidden cursor-pointer transition hover:bg-transparent"
              onClick={() => setOpenCert(cert)}
            >
              <Image
                src={cert.src}
                alt={cert.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>

      {/* Modal Preview */}
      {openCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
          <div className="relative bg-white rounded-lg p-4 max-w-2xl w-full mx-4">
            <button
              onClick={() => setOpenCert(null)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-primary transition"
            >
              ✕
            </button>
            <Image
              src={openCert.src}
              alt={openCert.name}
              width={800}
              height={600}
              className="object-contain w-full h-auto p-10"
            />
            <p className="mt-4 text-center text-sm text-primary-foreground">
              {openCert.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
