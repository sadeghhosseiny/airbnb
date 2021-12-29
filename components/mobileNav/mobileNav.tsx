import { useState } from "react";

function MobileNav() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="block md:hidden z-50 relative">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className={`cursor-pointer flex flex-col justify-center items-center w-[50px] h-[50px] 
      fixed right-10 bottom-12 rounded-full ${
        isClicked ? "bg-red-500" : "bg-gray-900"
      } transition duration-300`}
      >
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
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Wishlist</div>
        <div className="cursor-pointer">Profile</div>
        <div className="cursor-pointer">Reserves</div>
      </div>
    </div>
  );
}

export default MobileNav;
