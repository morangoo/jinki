export const themes = [
  { name: "video-game", mode: "any" },
  { name: "manga", mode: "any" },
] as const;

export type ThemeType = typeof themes[number]["name"];

export type ThemeConfig = {
  name: ThemeType;
  mode: "mobile" | "desktop" | "any";
};