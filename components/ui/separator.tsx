"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react"; // Assuming you're using next-auth for authentication
import { useState } from "react";

type props = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    previewLink: string;
    confidential: boolean; 
  };
};

export default function ProjectCard({ project }: props) {
  const { data: session } = useSession(); // Using next-auth session to check if user is authenticated
  const [password, setPassword] = useState(""); // Password state
  const [passwordCorrect, setPasswordCorrect] = useState(false); // Track if the entered password is correct

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Get the password from the environment variable
    const correctPassword = process.env.WORK_PROJECT_PASSWORD;
    if (password === correctPassword) {
      setPasswordCorrect(true); // If the password is correct, allow access to the project
    } else {
      alert("Incorrect password! Please try again or request access.");
    }
  };

  return (
    <div className="w-full lg:max-w-[400px] max-w-fit rounded-2xl bg-muted border px-3 sticky top-8">
      <div className="flex justify-between flex-shrink-0 px-4 pt-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe size={18} />
          <span>Web-Page</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="block rounded-full size-3 bg-green-500 ml-auto" />
          <span className="block rounded-full size-3 bg-yellow-500" />
          <span className="block rounded-full size-3 bg-red-500 " />
        </div>
      </div>
      <div className="group relative h-[200px] overflow-hidden cursor-pointer rounded-lg m-2  border">
        <Image className="size-full object-cover object-top" src={project.image} alt={project.title} width={400} height={400} />
        <Link href={project.previewLink} target="_blank" className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <ExternalLink size={24} className="absolute top-4 right-4 opacity-90 hidden group-hover:block" />
      </div>
      <div className="px-4 py-2 w-full">
        <h2 className="text-xl capitalize font-bold my-3">{project.title}</h2>
        <p className="text-muted-foreground h-[150px] overflow-hidden">{project.description}</p>
        <div className="space-x-2 my-7">
          {project.confidential ? (
            // If the project is confidential, check if user is authenticated or entered password
            passwordCorrect || session ? (
              // Show "Live view" if the user is authenticated or the password is correct
              <Button asChild variant="secondary" className="bg-primary-foreground hover:bg-white hover:text-black">
                <Link href={project.previewLink} target="_blank">
                  Live view
                </Link>
              </Button>
            ) : (
              <div>
                {/* If password is not entered correctly, ask for password */}
                <form onSubmit={handlePasswordSubmit}>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded"
                    required
                  />
                  <Button type="submit" variant="secondary" className="bg-primary-foreground hover:bg-white hover:text-black">
                    Submit Password
                  </Button>
                </form>
                <p>Or <Link href="/contact">request access</Link></p>
              </div>
            )
          ) : (
            // If the project is not confidential, show "Live view"
            <Button asChild variant="secondary" className="bg-primary-foreground hover:bg-white hover:text-black">
              <Link href={session ? project.previewLink : "/contact"} target="_blank">
                {session ? "Live view" : "Request Access"}
              </Link>
            </Button>
          )}
          <Button asChild variant="ghost" className="bg-muted-foreground/10">
            <Link href={project.githubLink} target="_blank">
              Git Hub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
