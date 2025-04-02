"use client";
import data from "@/data";
import Link from "next/link";
import useHash from "@/hooks/use-hash";
import Image from "next/image";
import {cn} from "@/lib/utils";


  export default function Header(){
    const {hash,updateHash}= useHash();
    return(
        <div className="w-full h-12 border-b bg-muted flex items-center">
            <div className="w-14 flex items-center justify-center flex-shrink-0 font-bold">
              <Image src="/img/fav.svg" alt="Varie Logo" width={26} height={26} className="object-contain"/>
            </div>
            <div className="flex item-center size-full">
              {data.header.navItems.map((item)=>{
                const isActive= item.path===hash || (item.path ==="#home" && hash==="");
                return(
                  <Link key={item.id} href={item.path} scroll 
                  onClick={() => updateHash(item.path.substring(1))}
                  className={cn(
                    "relative h-full w-fit lg:min-w-40 border-x flex items-center justify-start gap-2 text-muted-foreground px-3",
                    "hover:bg-muted transition-colors duration-200 ease-in-out",
                    isActive && "text-foreground bg-background",
                    item.isRight && "ml-auto"
                  )}>
                  <item.icon size={14} className="text-primary-foreground" />
                  <span className="hidden lg:text-base lg:inline md:text-xs">{item.name}</span> {isActive && <BorderActive />}
                </Link>
                );
              })}
              {data.sidebar.links.map((item)=>{
                return(
                  <Link key={item.name} href={item.link} target="__blank" 
                  className={cn(
                    "relative h-full w-fit lg:hidden border-x flex items-center justify-start gap-2 text-muted-foreground px-3",
                    "hover:bg-muted hover:text-white transition-colors duration-200 ease-in-out",
                  )}>
                  <item.icon size={14} className="text-primary-foreground" />
                </Link>
                );
              })}
            </div>
        </div>
    );
  }

const BorderActive=()=>(
  <>
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
  <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-background" />
</>
);