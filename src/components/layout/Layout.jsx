import { useTheme } from '../../contexts/ThemeContext';
import Navbar from './Navbar';
import DownloadButton from '../common/DownloadButton';

/**
 * Main layout component that wraps all pages
 * Handles theme-specific styling and common layout elements
 */
function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300
      ${theme === 'dark' ? 'bg-dark-bg text-dark-text' : 'bg-white text-gray-900'}
    `}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        {children}
      </main>
      <DownloadButton />
    </div>
  );
}

export default Layout;