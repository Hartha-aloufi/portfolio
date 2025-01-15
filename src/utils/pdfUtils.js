/**
 * Utility function to print specific element as PDF
 */
export const generatePDF = () => {
  // Store current body class for dark mode
  const currentClass = document.documentElement.className;
  
  try {
    // Force light mode for PDF
    document.documentElement.className = 'light';
    
    // Add minimal print styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        @page {
          margin: 0 0 !important;
          padding: 0 0 !important;
        }
        
        body {
          padding: 0 !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Ensure skill tags backgrounds are visible */
        .bg-primary\\/10 {
          background-color: #2AB09020 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        .bg-gray-100 {
          background-color: #f3f4f6 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `;
    document.head.appendChild(style);

    const printOptions = {
      destination: 'save-as-pdf',
      shouldPrintBackgrounds: true,
      printBackground: true,
      preferCSSPageSize: true
    };

      if (window.navigator.userAgent.indexOf('Chrome') > -1) {
      // For Chrome
      window.print(printOptions);
    } else {
      // For other browsers, show print dialog with a message
      alert('Please select "Save as PDF" in the destination dropdown of your print dialog.');
      window.print();
    }

    // Cleanup
    document.head.removeChild(style);
  } finally {
    // Restore original theme
    document.documentElement.className = currentClass;
  }
};