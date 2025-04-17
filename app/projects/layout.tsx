import Header  from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/sidebar";
import LinesNumber from "@/components/layout/line-numbers";
import { ResizablePanelGroup,ResizablePanel,ResizableHandle } from "@/components/ui/resizable";
import Terminal from "@/components/layout/terminal";
import Image from "next/image";
import data from "@/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

export default function MainLayout({children}:{children:React.ReactNode}){
  return(
    <div className="flex flex-col size-full">

      <div className="w-full h-12 border-b bg-muted flex items-center">
            <div className="w-14 flex items-center justify-center flex-shrink-0 font-bold">
              <Image src="/img/fav.svg" alt="Varie Logo" width={26} height={26} className="object-contain"/>
            </div>
            <div className="flex item-center size-full">
            <Link  href="/" scroll 
                  className={cn(
                    "relative h-full w-fit lg:min-w-40 border-x flex items-center justify-start gap-2 text-muted-foreground px-3",
                    "hover:bg-muted transition-colors duration-200 ease-in-out",
                    "text-foreground bg-background"
                  )}>
                  <Home size={14} className="text-primary-foreground" />
                  <span className="hidden lg:text-base lg:inline md:text-xs">Home</span> <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
                  <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-background" />
                </Link>
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

      <div className="flex size-full">
        <Sidebar/>
        <ResizablePanelGroup direction="vertical" className="size-full">
        <ResizablePanel defaultSize={91}>
          <div className="size-full flex overflow-hidden">
            <LinesNumber/>
            <div id="scroll" className="size-full overflow-y-auto overflow-x-hidden scroll-smooth">{children}</div>
          </div>
        </ResizablePanel>
        <ResizableHandle  className="hidden sm:block" withHandle/>
        <ResizablePanel className="hidden sm:block" defaultSize={9} minSize={4} maxSize={25}>
          <Terminal/>
        </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div>
        
      </div>
      <Footer/>
    </div>
    
  );
}