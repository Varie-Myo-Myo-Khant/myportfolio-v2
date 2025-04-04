"use client";
import Lottie from "lottie-react";
import animation from "@/public/img/laptop.json";

export default function LaptopAnimation({ className }: { className?: string }) {
  return <Lottie className={className} animationData={animation} loop={true} />;
}
