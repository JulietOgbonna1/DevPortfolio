'use client'
import TechCard from "./techcardprops";
import { motion } from "framer-motion";
import { useTheme } from  "../themeContext";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
export default function Technical() {
  const {lightMode} = useTheme();
  return (
    <section>
      <>
      <motion.div
        animate={{ y: [0, -12, 0], backgroundPosition: ["0%", "100%", "0%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" bg-linear-to-r from-white  via-teal-400 to-gray-400 bg-size-[200%_100%] bg-clip-text text-transparent ml-15"
      >
      <h2  className={`${lightMode ? 'text-black' : ''} text-3xl font-extrabold inline-block transition-colors duration-300`}>Technical Skills</h2>  
               <motion.span
  animate={{ x: [0, 50, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="block absolute left-15 w-20 h-1 bg-[#10B981] mt-2 rounded"
/>
      </motion.div>
      </>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-8 m-5 mr-6"
      >
        <motion.div variants={card}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0px 0px 20px rgba(16,185,129,0.6)", borderRadius: '15px' }}
          transition={{ type: "spring", stiffness: 300, ease: "easeInOut" }}>
          <TechCard
            title="React"
            description="Frontend Library"
            image="/reacticon.png"
          />
        </motion.div>


        <motion.div variants={card}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0px 0px 20px rgba(16,185,129,0.6)", borderRadius: '15px' }}
          transition={{ type: "spring", stiffness: 300, ease: "easeInOut" }}>
          <TechCard
            title="TypeScript"
            description="Static Typing"
            image="/typescriptIcon.png"
          />
        </motion.div>


        <motion.div variants={card}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0px 0px 20px rgba(16,185,129,0.6)", borderRadius: '15px' }}
          transition={{ type: "spring", stiffness: 300, ease: "easeInOut" }}>
          <TechCard
            title="Tailwind CSS"
            description="CSS Framework"
            image="/tailwindicon.png"
          />
        </motion.div>

        <motion.div variants={card}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0px 0px 20px rgba(16,185,129,0.6)", borderRadius: '15px' }}
          transition={{ type: "spring", stiffness: 300, ease: "easeInOut" }}>
          <TechCard
            title="Node.js"
            description="Runtime"
            image="/jsIcon.png"
          />
        </motion.div>

        <motion.div variants={card}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0px 0px 20px rgba(16,185,129,0.6)", borderRadius: '15px' }}
          transition={{ type: "spring", stiffness: 300, ease: "easeInOut" }}>
          <TechCard
            title="PostgreSQL"
            description="Database"
            image="/postgreIcon.png"
          />
        </motion.div>


        <motion.div variants={card}
          whileHover={{ scale: 1.07, y: -6, boxShadow: "0px 0px 20px rgba(16,185,129,0.6)", borderRadius: '15px' }}
          transition={{ type: "spring", stiffness: 300, ease: "easeInOut" }}>
          <TechCard
            title="AWS"
            description="Cloud Services"
            image="/awsicon.png"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}