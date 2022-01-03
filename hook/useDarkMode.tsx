import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

// localStorage is for saving light and darkMode because when page changed this function run again and if we in darkMode it
// change to lighMode

export function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "light",
  );
  // const state = useSelector((state: RootState) => ({
  //   mode: state?.modeReducer?.mode,
  // }));
  // const temp = state?.mode == "light" ? "dark" : "light";

  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
