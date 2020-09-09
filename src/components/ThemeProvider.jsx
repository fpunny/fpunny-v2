import React, { useEffect, useState } from 'react';
export const ThemeContext = React.createContext({});

export default function ThemeProvider({ children }) {
  const themeState = useState(() => {
    if (typeof window !== `undefined`) {
      const d = window.localStorage.getItem(`dark_mode`);
      if (d) {
        return d === `true`;
      } else if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    }
    return false;
  });

  const [dark] = themeState;
  useEffect(() => {
    if (dark) {
      window.localStorage.setItem(`dark_mode`, true);
      document.body.classList.add(`dark`);
    } else {
      window.localStorage.setItem(`dark_mode`, false);
      document.body.classList.remove(`dark`);
    }
    
    if (!document.body.classList.contains(`animate`)) {
      window.setTimeout(() => {
        document.body.classList.add(`animate`);
      }, 0);
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}
