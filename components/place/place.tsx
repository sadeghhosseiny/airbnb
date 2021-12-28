import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

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
  return (
    <div className="realtive shadow-lg mx-20 p-3 rounded-lg flex flex-grow">
      <div className="relative h-80 w-80 rounded-lg">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="cursor-pointer rounded-lg"
        />
      </div>
      <div className="mx-4 flex flex-col flex-1">
        <div className="mb-2 flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-6" />
        </div>
        <h4 className="text-2xl font-semibold border-b mb-2 pb-2">{title}</h4>
        <p>{description}</p>
        <div className="flex justify-between items-end flex-grow">
          <div className="flex">
            <StarIcon className="h-5 text-orange-500" />
            <p>{star}</p>
          </div>
          <div>
            <h1>{price}</h1>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
