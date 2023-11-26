import { Themes } from "./theme.expoter";
import { ThemeName } from "./theme.type";

export function setTheme(theme: ThemeName) {
  localStorage.setItem("theme", theme);
  console.log("set theme", Themes[theme]);
  document.documentElement.style.setProperty(
    "--backgroundColor",
    Themes[theme].backgroundColor
  );
  document.documentElement.style.setProperty(
    "--textColor",
    Themes[theme].textColor
  );
}
