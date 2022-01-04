import Image from "next/image";
import Fade from "react-reveal/Fade";

function GifBanner() {
  return (
    <Fade>
      <div className="relative mx-6 mb-14 sm:mb-0 sm:mx-12 max-w-6xl xl:mx-auto rounded-xl p-5 lg:p-10 my-7 bg-white dark:bg-gray-900 transition duration-300 shadow-lg">
        <div className="relative rounded-xl h-[250px] md:w-full md:h-[300px] lg:w-full lg:h-[350px] xl:h-96 mx-auto">
          <Image
            src="https://media.giphy.com/media/WuXMlNW5ii2cmRSzyF/giphy.gif"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl pointer-events-none"
          />
        </div>
        <div className="absolute max-w-xs bg-white dark:bg-gray-900 dark:text-gray-200 transition duration-300 shadow-md left-5 -bottom-8 sm:left-9 sm:bottom-9 lg:left-16 lg:bottom-24 px-4 py-6 rounded-lg">
          <h1 className="lg:text-3xl font-semibold mb-5 max-w-sm">
            Want to go on an adventure?
          </h1>
          <button className="p-3 bg-gray-800 text-gray-300 shadow-sm rounded-lg hover:bg-red-400 hover:text-black transition duration-300">
            Take me to nirvana baby!
          </button>
        </div>
      </div>
    </Fade>
  );
}

export default GifBanner;
