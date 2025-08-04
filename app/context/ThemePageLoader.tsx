"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";

type Props = {
  route: string;
};

export default function ThemedPageLoader({ route }: Props) {
  const { theme } = useTheme();
  const [ThemePage, setThemePage] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`../layouts/${theme}/${route}`)
      .then((module) => setThemePage(() => module.default))
      .catch((error) => {
        console.error("Error loading themed page:", error);
        setThemePage(null);
      });
  }, [theme, route]);

  return ThemePage ? <ThemePage /> : <div>Loading...</div>;
}