import { Themes } from "./theme.expoter";
import { ThemeName } from "./theme.type";

export function setTheme(theme: ThemeName) {
  localStorage.setItem("theme", theme);
  console.log("set theme", Themes[theme]);
  Object.keys(Themes[theme]).forEach((property: string) => {
    const validProperty = property as keyof (typeof Themes)[typeof theme];
    const value = Themes[theme][validProperty];
    document.documentElement.style.setProperty(`--${property}`, value);
  });
}
