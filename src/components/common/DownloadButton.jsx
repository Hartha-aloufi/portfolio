import { generatePDF } from '../../utils/pdfUtils';
import { useState } from 'react';

function DownloadButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={generatePDF}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-6 bottom-6 z-40 group flex items-center gap-2 
        transition-all duration-300 outline-none"
      aria-label="Download PDF version"
    >
      {/* Tooltip */}
      <span className={`absolute right-full mr-4 px-3 py-1.5 text-sm text-white 
        bg-gray-800 rounded-lg whitespace-nowrap transition-all duration-300
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        Download Resume
      </span>

      {/* Button */}
      <div className="bg-primary text-white p-4 rounded-lg shadow-mint hover:shadow-lg
        hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
        {/* Background animation */}
        <div className="absolute inset-0 bg-primary-dark transform origin-left scale-x-0 
          group-hover:scale-x-100 transition-transform duration-300" />
        
        {/* Icon */}
        <div className="relative">
          <svg 
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" 
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default DownloadButton;