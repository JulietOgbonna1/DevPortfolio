'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../themeContext";
import { section } from "framer-motion/client";

type TechCardProps = {
  title: string;
  description: string;
  image: string;

};

export default function TechCard({
  title,
  description,
  image,
}: TechCardProps) {
  const { lightMode } = useTheme();
  return (
    <section className="h-full">
      <div className={` container1 hidden md:block ${lightMode ? 'bg-gray-200 border-gray-700' : 'bg-[#16232C]'}  p-6 rounded-xl hover:bg-slate-700 transition text-center h-full`}>

      <div className="flex justify-center mb-4">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-4"
        >
          <Image
            src={image}
            alt={title}
            width={30}
            height={30}
          />
        </motion.div>
      </div>

      <h3 className={`${lightMode ? 'text-black' : 'text-white'} font-semibold text-lg  mb-2 transition-colors duration-300`}>
        {title}
      </h3>

      <p className={`${lightMode ? 'text-gray-600' : 'text-gray-400'} text-sm`}>
        {description}
      </p>
    </div>


    <div className={` container2 block md:hidden ${lightMode ? 'bg-gray-200 border-gray-700' : 'bg-[#16232C]'}  p-6 rounded-xl hover:bg-slate-700 transition text-center w-40 h-full mr-5`}>

      <div className="flex justify-center mb-4 ">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center "
        >
          <Image
            src={image}
            alt={title}
            width={30}
            height={30}
          />
        </motion.div>
      </div>

      <h3 className={`${lightMode ? 'text-black' : 'text-white'} font-semibold text-[14px]  mb-2 transition-colors duration-300`}>
        {title}
      </h3>

      <p className={`${lightMode ? 'text-gray-600' : 'text-gray-400'} text-[12px]`}>
        {description}
      </p>
    </div>
    </section>
    
  );
}