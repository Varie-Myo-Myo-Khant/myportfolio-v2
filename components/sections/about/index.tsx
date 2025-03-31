"use client"
import useCurSection from "@/hooks/use-cur-section";
import { useRef } from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import data from "@/data";
import {BadgeCheck} from "lucide-react";

export default function AboutSection(){
    const ref = useRef(null);
    useCurSection(ref);
    return(
        <div ref={ref} id="about" className="w-full py-12 my-32 bg-muted text-sm md:text-base">
            <h1 className="text-center text-3xl md:text-5xl mb-12">
                <span className="text-gradient-primary">{"-{ "}</span>
                About Me
                <span className="text-gradient-primary">{" }-"}</span>
            </h1>

            <div className="flex gap-9 items-center flex-col lg:flex-row w-10/12 mx-auto p-5 rounded-lg container">
            <div className="relative flex-shrink-0">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1, ease: "easeIn" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl" />
                <motion.div initial={{ x: "-200%" }} animate={{ x: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="rounded-full size-[200px] bg-gradient-primary p-0.5">
                    <Image className="size-full rounded-full grayscale hover:grayscale-0 transition-all" width={600} height={600} alt="about profile image" src={data.about.image} />
                </motion.div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
                <motion.p initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }} className="text-muted-foreground">
                {data.about.description}
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }} className="text-muted-foreground">
                    {data.about.skills.map((item)=>{
                        return(
                            <ul>
                                <li key={item.id} className=" flex space-x-2 text-justify"> <BadgeCheck className="text-primary-foreground inline mr-4" />{item.text}</li>
                            </ul>
                        );
                    })}
                </motion.p>
                <br />
                <a href="#contact" className="text-primary-foreground hover:underline"> Get In Touch! 🚀</a> 
            </div>

            </div>
        </div>
    );
}