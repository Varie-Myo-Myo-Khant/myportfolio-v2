"use client";
import dynamic from 'next/dynamic';
const ContactSection = dynamic(() => import('@/components/sections/contact'), { ssr: false });
const HomeSection = dynamic(() => import('@/components/sections/home'), { ssr: false });
const ProjectsSection = dynamic(() => import('@/components/sections/projects'), { ssr: false });
const Technologies = dynamic(() => import('@/components/sections/technologies'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/sections/about'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/sections/loading-creen'), { ssr: false });

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