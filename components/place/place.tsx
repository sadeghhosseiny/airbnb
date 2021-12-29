import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

type placeType = {
  place: {
    description: string;
    img: string;
    lat: number;
    location: string;
    long: number;
    price: string;
    star: number;
    title: string;
    total: string;
  };
};

function Place({ place }: placeType) {
  const { description, img, location, price, star, title, total } = place;

  const [clickOnHeart, setClickOnHeart] = useState(false);

  return (
    <div
      className="realtive bg-white shadow-lg mx-20 p-3 rounded-lg flex flex-col md:flex-row flex-grow
     cursor-pointer group hover:shadow-2xl transition duration-300"
    >
      <div className="relative mb-5 md:mb-0 h-64 w-full md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-lg overflow-hidden">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="cursor-pointer rounded-lg scale-125 group-hover:scale-100 transition transform duration-300"
        />
      </div>
      <div className="mx-4 flex flex-col flex-1">
        <div className="mb-2 flex justify-between">
          <p>{location}</p>
          <HeartIcon
            onClick={() => setClickOnHeart(!clickOnHeart)}
            className={`${
              clickOnHeart && "text-red-400 fill-current"
            } h-6 cursor-pointer hover:text-red-400 active:scale-150 transition transform duration-200`}
          />
        </div>
        <h4 className="text-2xl font-semibold border-b mb-2 pb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-end flex-grow">
          <div className="flex items-center">
            <StarIcon className="h-5 text-orange-500" />
            <p className="ml-2">{star}</p>
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-semibold">{price}</h1>
            <p className="text-gray-600 text-right md:mt-2">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
