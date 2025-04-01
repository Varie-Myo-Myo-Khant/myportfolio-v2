"use client";
import LoadingScreen from "@/components/sections/loading-creen";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";
import AboutSection from "@/components/sections/about";
import dynamic from 'next/dynamic';

const ContactSection = dynamic(() => import('@/components/sections/contact'), { ssr: false });
export default function Home(){
    return (
    <>
        <LoadingScreen/>
        <HomeSection/>
        <AboutSection/>
        <Technologies/>
        <ProjectsSection/>
        <ContactSection/>
    </>
    );
}