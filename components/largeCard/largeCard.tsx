import Image from "next/image";

type largeCardTypes = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

function LargeCard({ img, title, description, buttonText }: largeCardTypes) {
  return (
    <section className="relative py-16">
      <div className="relative h-96 shadow-lg rounded-xl">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute left-12 top-1/4">
        <h1 className="sm:text-3xl font-semibold py-4 w-64">{title}</h1>
        <p>{description}</p>
        <button className="mt-4 px-4 py-3 text-white bg-black hover:bg-red-400 rounded-lg transition duration-300">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
