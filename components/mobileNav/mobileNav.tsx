import {
  ClipboardCheckIcon,
  HeartIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDarkMode from "../../hook/useDarkMode";
import { changeMode } from "../../store/actions";

function MobileNav() {
  const [isClicked, setIsClicked] = useState(false);
  // const [mode]: any = useDarkMode();
  const [theme, setTheme]: any = useDarkMode();

  const dispatch = useDispatch();

  return (
    <div className="block md:hidden z-50 relative">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className={`cursor-pointer flex flex-col justify-center items-center w-[50px] h-[50px] 
      fixed right-10 bottom-12 rounded-full ${
        isClicked ? "bg-red-500" : "bg-gray-900 dark:bg-zinc-600"
      } transition duration-300`}
      >
        {console.log(theme)}
        {/* {console.log("mobile Nevbar ", colorTheme)} */}
        <span
          className={`${
            isClicked ? "rotate-45" : "-translate-y-2"
          } absolute transition transform duration-300 h-[3px] w-7 bg-gray-300 rounded-lg`}
        ></span>
        <span
          className={`${
            isClicked && "opacity-0"
          } transition transform duration-300 h-[3px] w-7 bg-gray-300 rounded-lg`}
        ></span>
        <span
          className={`${
            isClicked ? "-rotate-45" : "translate-y-2"
          } absolute transition transform duration-300 h-[3px] w-7 bg-gray-300 rounded-lg`}
        ></span>
      </div>
      <div
        className={`${
          isClicked ? "translate-x-0" : "translate-x-72"
        } transition transform duration-300 space-y-4 py-4 pl-4 bg-gray-700 text-slate-200 fixed right-0 bottom-28 w-64 rounded-l-lg`}
      >
        <div className="flex cursor-pointer">
          <HomeIcon className="h-5 mr-2" />
          Home
        </div>
        <div className="flex cursor-pointer">
          <HeartIcon className="h-5 mr-2" />
          Wishlist
        </div>
        <div className="flex cursor-pointer">
          <UserIcon className="h-5 mr-2" />
          Profile
        </div>
        <div className="flex cursor-pointer">
          <ClipboardCheckIcon className="h-5 mr-2" />
          Reserves
        </div>
        <div
          onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}
          className="flex cursor-pointer"
        >
          {theme == "light" ? (
            <MoonIcon className="h-5 mr-2" />
          ) : (
            <SunIcon className="h-5 mr-2" />
          )}
          Swith Theme
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
