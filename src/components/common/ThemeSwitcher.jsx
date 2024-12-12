import { useTheme } from '../../contexts/ThemeContext';

/**
 * Theme switcher component that allows users to toggle between light and dark themes
 * Supports both mouse and touch interactions
 */
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', label: '☀️' },
    { id: 'dark', label: '🌙' },
  ];

  return (
    <div className="flex items-center space-x-2">
      {themes.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          className={`w-8 h-8 flex items-center justify-center 
            transition-colors duration-200
            ${theme === id ? 'bg-primary text-white' : 
              'hover:bg-gray-100 dark:hover:bg-gray-800'}
            touch-manipulation`}
          aria-label={`Switch to ${id} theme`}
          style={{ touchAction: 'manipulation' }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ThemeSwitcher;