"use client";

import ThemedPageLoader from "@/app/context/ThemePageLoader";
import { IntroPage } from "@/app/layouts/intro/page";
import { useEffect, useState } from "react";

export default function Page() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("introSeen")) {
      setShowIntro(true);
    }
  }, []);

  const handleCloseIntro = () => {
    localStorage.setItem("introSeen", "true");
    setShowIntro(false);
  };

  if (showIntro) return <IntroPage onClose={handleCloseIntro} />;
  return <ThemedPageLoader route="page" />;
}