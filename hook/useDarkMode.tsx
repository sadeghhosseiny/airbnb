import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export function useDarkMode() {
  const state = useSelector((state: RootState) => ({
    mode: state?.modeReducer?.mode,
  }));
  const temp = state?.mode == "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(temp);
    root.classList.add(state?.mode);
  }, [state?.mode]);

  return [state?.mode];
}

export default useDarkMode;
