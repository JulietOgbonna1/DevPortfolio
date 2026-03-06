'use client'
import React from 'react'
import ProjectCards from './projectprops'
import { motion } from "framer-motion";
import { useTheme } from  "../themeContext";

const Projects = () => {
    const { lightMode } = useTheme();
    return (
        <section className={` ${lightMode ? 'bg-white text-black' : 'bg-[#101F22] text-white'} min-h-screen transition-colors duration-300 pb-5`}>
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  viewport={{ once: true }}
>
     <motion.div
        animate={{ y: [0, -12, 0], backgroundPosition: ["0%", "100%", "0%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${lightMode ? 'bg-linear-to-r from-gray-800 via-teal-500 to-gray-600' : 'bg-linear-to-r from-white via-teal-400 to-gray-400'} bg-size-[200%_100%] bg-clip-text text-transparent`}
      >
     <h2  className={`${lightMode ? 'text-black' : ''} text-3xl font-extrabold inline-block transition-colors duration-300 ml-15`}>Featured Projects</h2> 
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
      
         
            <div className="cardscontainer1 hidden md:grid grid-cols-3 xs:grid-cols-1 gap-7 mt-8 ml-15 mr-15">
                <ProjectCards 
                    image="/fintech.png"
                    title="Fintech Dashboard"
                    description={
                        <>
                        A real-time financial tracking application with <br />
                        complex data visualizations and secure <br />
                        authentication. </>
                    }
                    buttons={[
                        { text: "Next.js", link: "#" },
                        { text: "D3.js", link: "#" },
                        { text: "Supabase", link: "#" },
                    ]}  
                    />
                        
                <ProjectCards
                    image="/shopsphere.png"
                    title="ShopSphere E-Commerce"
                    description={
                        <>
                        High-performance headless commerce solution <br />
                        with custom checkout flow and Stripe integration.
                        </>
                    }
                            buttons={[
                        { text: "React", link: "#" },
                        { text: "Shopify API", link: "#" },
                        { text: "Tailwind", link: "#" },
                    ]}
                />
                <ProjectCards
                    image="/pulse.png"
                    title="Pulse Collab Tool"
                    description={
                        <>
                        Real-time team collaboration platform with task <br />
                        management, chat, and file sharing features.</>
                    }
                    buttons={[
                        { text: "Node.js", link: "#" },
                        { text: "Socket.io", link: "#" },
                        { text: "PostgreSQL", link: "#" },
                    ]}
                />
                <ProjectCards
                    image="/pulsecollab.png"
                    title="Pulse Collab Tool"
                    description={
                        <>
                        Real-time team collaboration platform with task <br />
                        management, chat, and file sharing features.</>
                    }
                    buttons={[
                        { text: "Node.js", link: "#" },
                        { text: "Socket.io", link: "#" },
                        { text: "PostgreSQL", link: "#" },
                    ]}
                />
                <ProjectCards
                    image="/fintechdashboard.png"
                    title="FinTech Dashboard"
                    description={
                        <>
                        A real-time financial tracking application with <br />
                        complex data visualizations and secure <br />
                        authentication.
                        </>
                    }
                    buttons={[
                        { text: "Next.js", link: "#" },
                        { text: "D3.js", link: "#" },
                        { text: "Supabase", link: "#" },
                    ]}
                />
                <ProjectCards
                    image="/shopecommerce.png"
                    title="ShopSphere E-Commerce"
                    description={
                        <>
                        High-performance headless commerce solution <br />
                        with custom checkout flow and Stripe integration.
                        </>
                    }
                    buttons={[
                        { text: "React", link: "#" },
                        { text: "Shopify API", link: "#" },
                        { text: "Tailwind", link: "#" },
                    ]}
                />
            </div>



            
            <div className="cardscontainer2 md:hidden flex flex-col  gap-7 mt-8 ml-8 mr-6">
                <ProjectCards
                    image="/pulse.png"
                    title="Pulse Collab Tool"
                    description={
                        <>
                        Real-time team collaboration platform with task <br />
                        management, chat, and file sharing features.</>
                    }
                    buttons={[
                        { text: "Node.js", link: "#" },
                        { text: "Socket.io", link: "#" },
                        { text: "PostgreSQL", link: "#" },
                    ]}
                />
                <ProjectCards 
                    image="/fintech.png"
                    title="Fintech Dashboard"
                    description={
                        <>
                        A real-time financial tracking application with <br />
                        complex data visualizations and secure <br />
                        authentication. </>
                    }
                    buttons={[
                        { text: "Next.js", link: "#" },
                        { text: "D3.js", link: "#" },
                        { text: "Supabase", link: "#" },
                    ]}  
                    />
                        
                <ProjectCards
                    image="/shopsphere.png"
                    title="ShopSphere E-Commerce"
                    description={
                        <>
                        High-performance headless commerce solution <br />
                        with custom checkout flow and Stripe integration.
                        </>
                    }
                            buttons={[
                        { text: "React", link: "#" },
                        { text: "Shopify API", link: "#" },
                        { text: "Tailwind", link: "#" },
                    ]}
                />
                
                
                <ProjectCards
                    image="/fintechdashboard.png"
                    title="FinTech Dashboard"
                    description={
                        <>
                        A real-time financial tracking application with <br />
                        complex data visualizations and secure <br />
                        authentication.
                        </>
                    }
                    buttons={[
                        { text: "Next.js", link: "#" },
                        { text: "D3.js", link: "#" },
                        { text: "Supabase", link: "#" },
                    ]}
                />
                <ProjectCards
                    image="/pulsecollab.png"
                    title="Pulse Collab Tool"
                    description={
                        <>
                        Real-time team collaboration platform with task <br />
                        management, chat, and file sharing features.</>
                    }
                    buttons={[
                        { text: "Node.js", link: "#" },
                        { text: "Socket.io", link: "#" },
                        { text: "PostgreSQL", link: "#" },
                    ]}
                />
                <ProjectCards
                    image="/shopecommerce.png"
                    title="ShopSphere E-Commerce"
                    description={
                        <>
                        High-performance headless commerce solution <br />
                        with custom checkout flow and Stripe integration.
                        </>
                    }
                    buttons={[
                        { text: "React", link: "#" },
                        { text: "Shopify API", link: "#" },
                        { text: "Tailwind", link: "#" },
                    ]}
                />
            </div>
</motion.div>
           
        </section>
    )
}

export default Projects