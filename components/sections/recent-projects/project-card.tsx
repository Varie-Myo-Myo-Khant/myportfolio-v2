"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Globe ,X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react"; // Assuming you're using next-auth for authentication
import { useState } from "react";
import { useRouter } from "next/navigation";

type props = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    sourcelink: string;
    techstack: string[];
    category:string;
    year:number;
    confidential: boolean; // Field to indicate if the project is confidential
  };
};

export default function ProjectCard({ project }: props) {
  const { data: session } = useSession(); // Assuming you are using NextAuth for user session
  const [password, setPassword] = useState(""); // State for password input
  const router=useRouter();
  const [showPasswordForm, setShowPasswordForm] = useState<{id:string} | null>(null);// State to toggle password form visibility
  const [passwordError, setPasswordError] = useState(""); // State to hold error message for incorrect password

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_PROJECT_PASSWORD; // Access the password from the env variable
    if (password === correctPassword) {

      router.push(`/projects/${project.id}`);
      setPasswordError(""); // Clear any previous error
      setShowPasswordForm(null); // Close the password modal
    } else {
      setPasswordError("Incorrect password! Please try again or request access."); // Set error message
    }
  };

  return (
    <div className="w-full lg:max-w-[400px] max-w-fit rounded-2xl bg-muted border px-3 top-4">
      <div className="flex justify-between flex-shrink-0 px-4 pt-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe size={18} />
          <span>{project.category?.toUpperCase()} - {project.year}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block rounded-full size-3 bg-green-500 ml-auto" />
          <span className="block rounded-full size-3 bg-yellow-500" />
          <span className="block rounded-full size-3 bg-red-500 " />
        </div>
      </div>
      <div className="group relative h-[200px] overflow-hidden cursor-pointer rounded-lg m-2 border">
        <Image className="size-full object-cover object-top" src={project.image || '/img/demo.png'} alt={project.title} width={400} height={400} />
        <Link href="#" className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <ExternalLink size={24} className="absolute top-4 right-4 opacity-90 hidden group-hover:block" />
      </div>
      <div className="px-4 py-2 text-xs w-full">
        <h2 className="text-lg capitalize font-bold my-3 h-12 max-h-12">{project.title}</h2>
        <div className="h-16 max-h-16 overflow-hidden">
        <p className="text-muted-foreground mb-1">
         <span className="text-primary-foreground"> Tech Stack :</span> {
            project.techstack.toString()
            }
        </p>
        <p className="text-muted-foreground h-[50] max-h-[50] overflow-hidden"> 
        <span className="text-primary-foreground"> Overview :</span> {project.description}</p>
        </div>
        
        <div className="space-x-2 my-5">
          {project.confidential ? (
              <div>
                {/* If password is not entered correctly, show the Enter Password button */}
                <Button className="text-xs"
                  variant="gradientDefault"
                  onClick={() => setShowPasswordForm(project.id.toString())}
                >
                  Require Crendentials to View
                </Button>

                {showPasswordForm && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white text-md p-5 rounded-lg w-[90%] max-w-md">
                      <div className="flex justify-between items-center">
                      <h3 className=" text-black font-bold text-sm" >Enter Project Password</h3>
                        <Button  onClick={() => setShowPasswordForm(null)} size="icon" className="bg-transparent text-muted hover:bg-transparent hover:text-primary-foreground p-0 m-0 w-auto">
                          <X size={20} />
                        </Button>
                      </div>
                      
                      {passwordError && (
                        <div className="bg-red-100 border text-xs border-red-500 text-red-700 p-3 rounded mb-4">
                          {passwordError}
                        </div>
                      )}
                      <code className="text-black text-10px">You’ll need credentials to access this project’s details.</code>
                      <form onSubmit={handlePasswordSubmit}>
                      <div className="flex justify-between items-center gap-2 my-4">
                        <input
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="p-2 border text-black rounded-md w-[80%]"
                          required
                        />
                        <Button className="text-white bg-primary-foreground hover:text-primary-foreground hover:bg-transparent border-2 border-primary-foreground rounded-md hover:border-primary-foreground"
                          type="submit"
                        >
                          Submit
                        </Button>
                        
                        </div>
                        <p className="text-xs my-2 text-primary-foreground">
                        No Passowrd?&nbsp;
                        <Link href="/#contact" onClick={() => setShowPasswordForm(null)} className="underline">Request access</Link>
                        </p>
                        
                      </form>
                      
                      
                    </div>
                  </div>
                )}
              </div>
            
          ) : (
            <Button asChild variant="gradientDefault" >
               <Link href={`/projects/${project.id}`}>
                  View Details
                </Link>
            </Button>
            
          )}
          
        </div>
      </div>
    </div>
  );
}
