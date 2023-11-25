type Themes = "light" | "dark";

function setTheme(theme: Themes) {
  document.querySelector("body")?.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme.toString());
}
export default setTheme;
