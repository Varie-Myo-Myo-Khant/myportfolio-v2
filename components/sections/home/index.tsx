"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import useCarSection from "@/hooks/use-cur-section";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import data from "@/data";
import Link from "next/link";
import Face from "./face";
import ChatAssistant from "./chat-assistant";

export default function HomeSection(){
    const router = useRouter();
    const ref=useRef(null);
    const isInView=useCarSection(ref);
    return(
        <section id="home" ref={ref} className="relative min-h-full flex flex-col lg:flex-row gap-28 p-6 items-center justify-center overflow-hidden container text-center md:text-left" >
            <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-transparent opacity-10 h-auto w-10/12 max-w-[1250px]" src="/img/grid.svg" alt="grid image" width={0} height={0}/>

            <div className="space-y-7 text-center md:text-left md:text-xl">
                <div className="-space-y-1">
                <p>Hi 👋, I&apos;m</p>
                <h1 className="relative text-6xl md:text-8xl">
                    {/* blur background colors behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 bg-gradient-primary opacity-50 w-full h-10 blur-3xl" />
                    <TextAnimation>{data.home.name}</TextAnimation>
                </h1>
                <h2 className="text-muted-foreground">
                    {"// "} {data.home.description.split(/#(\w+)/g).map((e, i) => (i % 2 === 0 ? e : <span key={`wrapped_${i}`} className="text-secondary">{`{${e.replaceAll("__", "-").replaceAll("_", " ")}}`}</span>))}
                </h2>
                </div>
                <div className="space-x-4">
                <Button
                    onClick={() => {
                    router.push("#projects");
                    }}
                    variant="gradientOutline"
                >
                    See My Work
                </Button>
                {data.home.cvLink && (
                    <Button asChild className="bg-muted-foreground/5" variant="ghost">
                    <Link href="/img/MyoMyoKhantCV.pdf" target="__blank">Get My CV</Link>
                    </Button>
                )}
                </div>
            </div>
            <motion.div variants={{ initial: { opacity: 0, scale: 0, y: "-20%" }, end: { opacity: 1, scale: 1, y: ["70%", 0] } }} initial="initial" animate="end" transition={{ duration: 1 }} className="relative min-w-[350px] text-center text-9xl min-h-[150px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl" />

                <Face />
             </motion.div>
             <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => router.push("#about")}
              >
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1">
                  <motion.div
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-1.5 h-3 bg-muted-foreground rounded-full"
                  />
                </div>
          </motion.div>
          <div className="flex flex-col items-center gap-2 text-center w-[450px]">
          <ChatAssistant />
        </div>
        </section>
    );

    
}

const TextAnimation = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="overflow-hidden relative">
        <motion.div className="absolute top-0 left-0 h-full w-full bg-gradient-primary origin-left" initial={{ scaleX: 1 }} animate={{ scaleX: [1, 0] }} transition={{ duration: 0.5 }} />
  
        <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          {children}
        </motion.div>
      </div>
    );
  };
