import { isLocalStorage } from "@/lib/isLocalStorage";
import { isWeb } from "@/lib/isWeb";
import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeType } from "./types";
import { ThemeContext } from "./ThemeContext";

const isLocalStorageAvailable = () => {
  return isWeb() && isLocalStorage();
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (isLocalStorageAvailable()) {
      const savedTheme = localStorage.getItem("theme") as ThemeType;
      return savedTheme;
    }

    return "light";
  });

  const toggleTheme = () => {
    const newTheme: ThemeType = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (isLocalStorageAvailable()) {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
