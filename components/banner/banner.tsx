import Image from "next/image";
import { useState, useEffect } from "react";
// import { motion, useTransform, useMotionValue } from "framer-motion";

function Banner() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="relative  h-[500px] sm:h-[550px] lg:h-[700px] xl:h-[700px] 2xl:h-[1500px] -top-[116px]">
      <div className="relative h-[500px] sm:h-[550px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px]">
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Banner;
