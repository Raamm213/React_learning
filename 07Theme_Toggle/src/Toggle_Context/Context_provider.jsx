import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

function Context_provider({ children }) {
  const [theme, setTheme] = useState("my-light");
  const lightTheme = () => setTheme("my-light");
  const darkTheme = () => setTheme("my-dark");

  return (
    <>
      <ThemeContext.Provider value={{ theme, lightTheme, darkTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default Context_provider;

export const useThemeContext = () => useContext(ThemeContext);
