"use client";
import LoadingScreen from "@/components/sections/loading-creen";
import HomeSection from "@/components/sections/home";
import ContactSection from "@/components/sections/contact";
import ProjectsSection from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";
import AboutSection from "@/components/sections/about";

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