/**
 * Utility function to print specific element as PDF
 */
export const generatePDF = () => {
  // Store current body class for dark mode
  const currentClass = document.documentElement.className;
  
  try {
    // Force light mode for PDF
    document.documentElement.className = 'light';
    
    // Add print-specific styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        /* Reset page margins and size */
        @page {
          margin: 1.5cm;
          size: A4;
        }

        /* Hide non-essential sections */
        nav, 
        button, 
        .no-print, 
        #download-btn,
        [id="languages-interests"],
        [id^="contact"],
        [id^="languages"],
        [id^="interests"] {
          display: none !important;
        }

        /* Reset base styles */
        body {
          background: white !important;
          color: black !important;
          font-size: 12pt !important;
          line-height: 1.5 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Main layout structure */
        main {
          display: flex !important;
          flex-direction: column !important;
          gap: 20pt !important;
        }

       

        /* Two-column layout for experience and skills */
        .content-wrapper {
          display: flex !important;
          gap: 30pt !important;
        }

        /* Experience section */
        #experience {
          flex: 2 !important;
          page-break-inside: auto !important;
        }

        /* Skills section */
        #skills {
          flex: 1 !important;
          page-break-inside: avoid !important;
        }

        #skills .grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 15pt !important;
        }

        #skills .grid > div {
          break-inside: avoid !important;
          background: #f8f8f8 !important;
          padding: 12pt !important;
          border-radius: 4pt !important;
        }

        /* Section titles */
        h2 {
          font-size: 16pt !important;
          margin-top: 15pt !important;
          margin-bottom: 10pt !important;
          page-break-after: avoid !important;
          border-bottom: 1pt solid #2AB090 !important;
          color: #2AB090 !important;
        }

        /* Hero section */
        #home {
          min-height: auto !important;
          padding-top: 0 !important;
          display: block !important;
          margin-bottom: 20pt !important;
        }

        /* Experience cards */
        [id^="experience"] .space-y-8 > div {
          break-inside: avoid !important;
          margin-bottom: 15pt !important;
          border: 1pt solid #eee !important;
          padding: 15pt !important;
        }

        /* Skills specific styles */
        #skills h3 {
          font-size: 14pt !important;
          color: #2AB090 !important;
          margin-bottom: 8pt !important;
        }

        #skills .flex.flex-wrap {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 6pt !important;
        }

        #skills .flex.flex-wrap > span {
          background: #2AB090 !important;
          color: white !important;
          padding: 2pt 6pt !important;
          border-radius: 3pt !important;
          font-size: 10pt !important;
          display: inline-block !important;
        }

        /* Ensure content visibility */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        /* Remove decorative elements */
        [class*="animate-"], 
        [class*="hover:"],
        [class*="backdrop-blur"],
        [class*="shadow"] {
          animation: none !important;
          transition: none !important;
          backdrop-filter: none !important;
          box-shadow: none !important;
        }

        /* Links */
        a {
          text-decoration: none !important;
          color: #2AB090 !important;
        }

        /* Prevent orphaned elements */
        p, h2, h3, li {
          orphans: 3 !important;
          widows: 3 !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Create wrapper for two-column layout
    const mainContent = document.querySelector('main');
    const experienceSection = document.getElementById('experience');
    const skillsSection = document.getElementById('skills');
    const educationSection = document.getElementById('education');

    if (experienceSection && skillsSection && educationSection && mainContent) {

      // Create wrapper if it doesn't exist
      let wrapper = document.querySelector('.content-wrapper');
      if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className = 'content-wrapper';
        
        // Move sections into wrapper
        experienceSection.parentNode.insertBefore(wrapper, experienceSection);
        wrapper.appendChild(experienceSection);
        wrapper.appendChild(skillsSection);
      }
    }

    // Trigger print dialog
    window.print();

    // Cleanup
    document.head.removeChild(style);
  } finally {
    // Restore original theme
    document.documentElement.className = currentClass;
  }
};