import { useEffect, useState } from "react";

function HandleScroll(val: number) {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > val) {
        setIsScroll(true);
      } else setIsScroll(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return isScroll;
}

export default HandleScroll;
