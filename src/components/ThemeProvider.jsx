import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext({});

export default function ThemeProvider({ children }) {
  const themeState = useState(() => {
    if (typeof window !== `undefined`) {
      return window.localStorage.getItem(`dark_mode`) === `true`;
    } else {
      return false;
    }
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
  }, [dark]);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}
