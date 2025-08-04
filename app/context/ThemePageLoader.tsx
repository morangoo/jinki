"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";

type Props = {
  route: string;
};

export default function ThemedPageLoader({ route }: Props) {
  const { theme } = useTheme();
  const [ThemePage, setThemePage] = useState<React.ComponentType | null>(null);
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    setThemePage(null);
    import(`../layouts/${theme}/${route}`)
      .then((module) => setThemePage(() => module.default))
      .catch((error) => {
        console.error("Error loading themed page:", error);
        setThemePage(null);
      });
  }, [theme, route, isClient]);

  if (!isClient) return null;

  if (!ThemePage) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/171176624?v=4"
          alt="Loading"
          className="img-spin"
          width={80}
          height={80}
        />
      </div>
    );
  }

  return <ThemePage />;
}