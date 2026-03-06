"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  lightMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  lightMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setLightMode(true);
      document.body.classList.add(lightMode ? 'light' : 'dark')
    }
  }, []);
  

  const toggleTheme = () => {
    const newTheme = !lightMode;
    
    setLightMode(newTheme);

    if (newTheme) {
      document.body.classList.add(lightMode ? 'light' : 'dark')
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);