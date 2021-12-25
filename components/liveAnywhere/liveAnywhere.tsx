import Image from "next/image";

type itemTypes = {
  item: {
    img: string;
    title: string;
  };
};

function LiveAnywhere({ item }: itemTypes) {
  return (
    <div className="rounded-lg">
      <div className="relative h-80 w-80 cursor-pointer shadow-xl rounded-lg hover:scale-105 transition transform duration-300">
        <Image src={item.img} layout="fill" className="rounded-lg" />
      </div>
      <h2 className="mt-4 text-xl font-extralight">{item.title}</h2>
    </div>
  );
}

export default LiveAnywhere;
