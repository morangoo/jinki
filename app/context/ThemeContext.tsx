"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { themes, ThemeType } from "./themes";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(themes[0].name);

  useEffect(() => {
    let mode = "any";
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      mode = width <= 768 ? "mobile" : "desktop";
      const filtered = themes.filter(t => t.mode === mode || t.mode === "any");
      const lastTheme = window.localStorage.getItem("lastTheme");
      let available = filtered;
      if (lastTheme) {
        available = filtered.filter(t => t.name !== lastTheme);
        if (available.length === 0) available = filtered;
      }
      const chosen = available[Math.floor(Math.random() * available.length)].name as ThemeType;
      setTheme(chosen);
      window.localStorage.setItem("lastTheme", chosen);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}