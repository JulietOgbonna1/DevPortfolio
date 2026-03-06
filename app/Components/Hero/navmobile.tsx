"use client";

import { useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Navbar({ lightMode, toggleTheme }: { lightMode: boolean; toggleTheme: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Work", "Skills", "About", "Contact"];

  return (
    <>
    
      <nav className="relative z-50">
      
        <ul className="hidden md:flex gap-6 w-full p-5 items-center text-xl pb-20">
          <li className="flex items-center mr-100 ml-10 hover:scale-150 transition-all">
            <img src="/logo.png" alt="Logo" />
            DevPortfolio
          </li>
          {navLinks.map((link, i) => (
            <li
              key={link}
              className={`p-2 hover:bg-[#10B981] hover:rounded ${i === 0 ? "ml-35" : ""}`}
            >
              <a href="">{link}</a>
            </li>
          ))}
          <li
            className="p-2 hover:bg-[#10B981] hover:rounded transition-all cursor-pointer"
            onClick={toggleTheme}
          >
            {lightMode ? <IoMoonSharp /> : <BsBrightnessHigh />}
          </li>
          <li className="p-2 hover:bg-[#10B981] hover:rounded">
            <a href="">Hire Me</a>
          </li>
        </ul>

       
        <div className="flex md:hidden items-center justify-between px-5 py-4 text-xl">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" />
            <span>DevPortfolio</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-[#10B981] hover:rounded transition-all"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {lightMode ? <IoMoonSharp /> : <BsBrightnessHigh />}
            </button>

            
            <button
              className="flex flex-col justify-center items-center w-9 h-9 gap-1.25 p-1 hover:bg-[#10B981] hover:rounded transition-all"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-1.75" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-1.75" : ""
                }`}
              />
            </button>
          </div>
        </div>

       
        <div
          className={`@min-sm:block md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-5 pb-6 gap-1 text-xl">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href=""
                  className="block p-3 rounded hover:bg-[#10B981] transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
           
            <li className="mt-2">
              <a
                href=""
                className="block p-3 rounded border border-[#10B981] hover:bg-[#10B981] transition-all text-center font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </nav>

      
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
