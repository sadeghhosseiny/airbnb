import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md">
      <div className="relative flex items-center my-auto h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="border-2 rounded-full py-2 flex items-center px-2 shadow-md text-white">
        <input
          className="pl-1 bg-transparent outline-none flex-grow"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p>Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 border-2 space-x-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
