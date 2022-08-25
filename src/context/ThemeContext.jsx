import React, {
  createContext, useLayoutEffect, useMemo, useState,
} from 'react';

export const ThemeContext = createContext({});

const currentTheme = localStorage.getItem('theme');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(currentTheme || 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);

      return nextTheme;
    });
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themeValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
      isDark: theme === 'dark',
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
