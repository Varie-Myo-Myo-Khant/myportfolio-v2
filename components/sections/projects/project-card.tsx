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
    sourcelink: string;
    techstack: string[];
    year:number;
    confidential: boolean; // Field to indicate if the project is confidential
  };
};

export default function ProjectCard({ project }: props) {
  const { data: session } = useSession(); // Assuming you are using NextAuth for user session
  const [password, setPassword] = useState(""); // State for password input
  const [passwordCorrect, setPasswordCorrect] = useState(false); // State to track if the password is correct
  const [showPasswordForm, setShowPasswordForm] = useState(false); // State to toggle password form visibility
  const [passwordError, setPasswordError] = useState(""); // State to hold error message for incorrect password

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_PROJECT_PASSWORD; // Access the password from the env variable
    if (password === correctPassword) {
      setPasswordCorrect(true); // If correct, show the live view
      setPasswordError(""); // Clear any previous error
      setShowPasswordForm(false); // Close the password modal
    } else {
      setPasswordError("Incorrect password! Please try again or request access."); // Set error message
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
      <div className="group relative h-[200px] overflow-hidden cursor-pointer rounded-lg m-2 border">
        <Image className="size-full object-cover object-top" src={project.image || '/img/demo.png'} alt={project.title} width={400} height={400} />
        <Link href={project.sourcelink} target="_blank" className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <ExternalLink size={24} className="absolute top-4 right-4 opacity-90 hidden group-hover:block" />
      </div>
      <div className="px-4 py-2 w-full">
        <h2 className="text-xl capitalize font-bold my-3">{project.title}</h2>
        <p className="text-muted-foreground h-[150px] overflow-hidden">{project.description}</p>
        <div className="space-x-2 my-7">
          {project.confidential ? (
            // If the project is confidential, check if the password is correct or the user is authenticated
            passwordCorrect || session ? (
              // Show the Live view link if the user is authenticated or password is correct
              <Button asChild variant="gradientDefault" >
                <Link href={project.sourcelink} target="_blank">
                  View Details
                </Link>
              </Button>
            ) : (
              <div>
                {/* If password is not entered correctly, show the Enter Password button */}
                <Button
                  variant="gradientDefault"
                  onClick={() => setShowPasswordForm(true)}
                >
                  Require Credentails to View Details
                </Button>

                {/* Tailwind Popup Modal for Password */}
                {showPasswordForm && (
                  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
                      <h3 className="text-xl mb-4">Enter Project Password</h3>
                      {/* Show an error alert if the password is incorrect */}
                      {passwordError && (
                        <div className="bg-red-100 border border-red-500 text-red-700 p-3 rounded mb-4">
                          {passwordError}
                        </div>
                      )}
                      <form onSubmit={handlePasswordSubmit}>
                        <input
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="p-2 border text-black rounded w-full mb-4"
                          required
                        />
                        <Button
                          type="submit"
                          variant="gradientDefault"
                          className="w-full"
                        >
                          Submit Password
                        </Button>
                      </form>
                      <p className="mt-2 text-sm">
                        <Link href="/contact" className="text-blue-500">Request access</Link>
                      </p>
                      <Button
                        variant="ghost"
                        className="mt-4 w-full"
                        onClick={() => setShowPasswordForm(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )
          ) : (
            <Button asChild variant="gradientDefault" >
              <Link href={ project.sourcelink} target="_blank">
               View Details
              </Link>
            </Button>
            
          )}
          
        </div>
      </div>
    </div>
  );
}
