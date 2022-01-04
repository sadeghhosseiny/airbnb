import Image from "next/image";

type itemTypes = {
  item: {
    img: string;
    location: string;
    distance: string;
  };
};

function ExploreNearby({ item }: itemTypes) {
  return (
    <div className="flex items-center cursor-pointer md:px-3 dark:hover:bg-zinc-700 hover:bg-gray-300 rounded-md md:py-4 group dark:shadow-slate-600 shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative h-32 w-32 md:group-hover:scale-125 transition-all transform duration-300">
        <Image
          src={item.img}
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="pl-4 lg:group-hover:pl-7 transition-all duration-300">
        <p className="text-md lg:text-xl">{item.location}</p>
        <p className="text-gray-500 dark:text-gray-200 opacity-100 md:opacity-0 translate-y-0 md:translate-y-32 group-hover:translate-y-0 group-hover:opacity-100 transition-all transform duration-300 ease-out">
          {item.distance}
        </p>
      </div>
    </div>
  );
}

export default ExploreNearby;
