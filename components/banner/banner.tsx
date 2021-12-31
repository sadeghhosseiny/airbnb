import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[500px] sm:h-[550px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px]">
      <div className="relative h-[500px] sm:h-[550px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px]">
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-2xl lg:text-4xl font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className="px-7 py-4 rounded-full mt-4 bg-white shadow-xl dark:bg-gray-900 active:scale-90 transition transform duration-200">
          <p
            className="font-bold
         text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-fuchsia-500"
          >
            I'm flexible
          </p>
        </button>
      </div>
    </div>
  );
}

export default Banner;
