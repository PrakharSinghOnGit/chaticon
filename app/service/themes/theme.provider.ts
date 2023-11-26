import dark from "./theme.dark";
import light from "./theme.light";
import lava from "./theme.lava";

const Themes: { [key: string]: { backgroundColor: string } } = {
  dark,
  light,
  lava,
};

function theme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return Themes[theme];
  }
  return Themes.light;
}

function setTheme(theme: string) {
  localStorage.setItem("theme", theme);
}
