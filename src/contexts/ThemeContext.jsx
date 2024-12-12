import { createContext, useContext, useState, useEffect } from 'react';

// Create context with default value
const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

/**
 * Theme provider component that manages theme state and local storage
 * Supports light and dark themes
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Update document class and local storage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}