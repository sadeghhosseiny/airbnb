import { useEffect, useState } from "react";

// localStorage is for saving light and darkMode because when page regenerated this function run again and if we in darkMode it
// change to lighMode

export function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "",
  );
  const colorTheme = theme === "light" ? "dark" : "light";
  console.log("function", colorTheme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
