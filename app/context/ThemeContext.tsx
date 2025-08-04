"use client";

import { createContext, useContext, useState, ReactNode } from "react";
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
  function getDeviceMode() {
    if (typeof window === "undefined") return "any";
    const width = window.innerWidth;
    return width <= 768 ? "mobile" : "desktop";
  }

  const [theme, setTheme] = useState<ThemeType>(() => {
    let mode = "any";
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      mode = width <= 768 ? "mobile" : "desktop";
    }
    const filtered = themes.filter(t => t.mode === mode || t.mode === "any");
    if (filtered.length === 0) return themes[0].name;
    return filtered[Math.floor(Math.random() * filtered.length)].name as ThemeType;
  });

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