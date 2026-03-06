import React, { JSX, } from "react";
import Image from "next/image";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../themeContext";

type projectProps = {
  image: string;
  title: string;
  description: string | JSX.Element;
  buttons: {
    text: string;
    link: string;
  }[];
};

const ProjectCards = ({
  title,
  description,
  image,
  buttons,
}: projectProps) => {
  const { lightMode } = useTheme();
  return (
    <section>
      <div className={`${lightMode ? 'bg-gray-200' : 'bg-[#16232C]'} h-full backdrop-blur-md 
                border border-white/10 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)]  
                hover:-translate-y-2 transition-all duration-300`}>

        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title} fill
            className="object-cover" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className={`${lightMode ? 'text-black' : 'text-white'} font-semibold text-lg mb-2 transition-colors duration-300`}>
            {title}
          </h3>

          <p className={`${lightMode ? 'text-gray-600' : 'text-gray-400'} text-sm text-[12px] mb-4 leading-relaxed`}>
            {description}
          </p>

          <div className="flex items-center gap-3 mt-4">
            {buttons.map((btn, index) => (
              <Button key={index} text={btn.text} link={btn.link} />
            ))}
          </div>

          <button className="mt-2 py-2 flex items-center gap-2 hover:bg-green-800 hover:text-white text-[#10B981] transition-all">
            View Project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;

