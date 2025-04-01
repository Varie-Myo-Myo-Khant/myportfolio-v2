"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function useHash() {
  // ✅ Initialize state safely to avoid "window is not defined" error
  const [hash, setHash] = useState<string>(() => 
    typeof window !== "undefined" ? window.location.hash : ""
  );

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    if (typeof window !== "undefined") {
      // ✅ Only add event listener in the browser
      window.addEventListener("hashchange", handleHashChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
    }
  }, [pathname]);

  const updateHash = (newHash: string) => {
    if (typeof window !== "undefined") {
      router.push(`#${newHash}`, { scroll: false });
      setHash(`#${newHash}`);
    }
  };

  return { hash, updateHash };
}
