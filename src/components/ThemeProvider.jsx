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
    const d = document.body.classList;
    if (dark) {
      window.localStorage.setItem(`dark_mode`, true);
      d.add(`dark`);
    } else {
      window.localStorage.setItem(`dark_mode`, false);
      d.remove(`dark`);
    }
    window.setTimeout(() => d.add(`animate`));
  }, [dark]);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}
