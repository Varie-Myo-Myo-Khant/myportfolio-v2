"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function useHash() {
  const [hash, setHash] = useState<string>(window.location.hash);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Ensure hash updates correctly when the pathname changes
  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  const updateHash = (newHash: string) => {
    router.push(`#${newHash}`, { scroll: false }); // Update hash without full reload
    setHash(`#${newHash}`); // Manually update state
  };

  return { hash, updateHash };
}
