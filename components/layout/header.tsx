"use client";
import { File, Home,AppWindowMac, LucideSend, User } from "lucide-react";
import Link from "next/link";
import useHash from "@/hooks/use-hash";

const navItems = [
    {
      id: 1,
      name: "Home.tsx",
      path: "#home",
      icon: Home,
    },
    {
      id: 2,
      name: "About.tsx",
      path: "#about",
      icon: User,
    },
    {
        id: 3,
        name: "Experiences.tsx",
        path: "#projects",
        icon: AppWindowMac,
      },
    {
      id: 4,
      name: "Projects.tsx",
      path: "#projects",
      icon: File,
    },
    {
      id: 4,
      name: "Contact-Me.tsx",
      path: "#contact",
      icon: LucideSend,
      isRight: true,
    },
  ];

  export default function Header(){
    const {hash}= useHash();
    return(
        <div>
            <div></div>
            <div>
                
            </div>
        </div>
    );
  }
