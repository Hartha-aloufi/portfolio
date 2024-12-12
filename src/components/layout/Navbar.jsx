import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeSwitcher from '../common/ThemeSwitcher';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { label: 'About Me', href: '#home', icon: '👨‍💻' },
    { label: 'Experience', href: '#experience', icon: '💼' },
    { label: 'Skills', href: '#skills', icon: '🎯' },
    { label: 'Contact', href: '#contact', icon: '📧' },
  ];

  // Handle scroll events for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.findLast(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300
        ${isScrolled ? 
          (theme === 'dark' ? 'bg-dark-surface/80' : 'bg-white/80') + ' shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white
              group-hover:rotate-12 transition-transform duration-300">
              HA
            </div>
            <span className="font-bold text-lg group-hover:text-primary transition-colors">
              Hartha Aloufi
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300
                  hover:bg-primary/10 hover:text-primary relative group
                  ${activeSection === item.href.slice(1) ? 'text-primary' : ''}`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
            <div className="pl-2 border-l border-gray-200 dark:border-gray-700">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
              hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative">
              <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300
                ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
              <span className={`absolute w-full h-0.5 bg-current top-1/2 -translate-y-1/2 transition-opacity duration-300
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300
                ${isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden
          ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                  hover:bg-primary/10 hover:text-primary
                  ${activeSection === item.href.slice(1) ? 'text-primary bg-primary/5' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
            <div className="px-4 pt-4 border-t dark:border-gray-700">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;