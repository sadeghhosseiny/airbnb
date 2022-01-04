import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

// localStorage is for saving light and darkMode because when page changed this function run again and if we in darkMode it
// change to lighMode

export function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.theme
        ? localStorage.theme
        : "light"
      : "light",
  );
  // const state = useSelector((state: RootState) => ({
  //   mode: state?.modeReducer?.mode,
  // }));
  // const temp = state?.mode == "light" ? "dark" : "light";

  // const colorTheme = theme === "light" ? "dark" : "light";
  const dark = "dark";
  const light = "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme == light ? dark : light);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;
