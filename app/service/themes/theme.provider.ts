import { Themes } from "./theme.expoter";
import { Theme, ThemeName } from "./theme.type";

export function getTheme(): Theme {
  const theme = localStorage.getItem("theme") as ThemeName | null;
  if (theme && theme in Themes) {
    return Themes[theme];
  }
  return Themes.light;
}

export function setTheme(theme: string) {
  localStorage.setItem("theme", theme);
}
