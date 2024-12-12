import React from 'react';

/**
 * Map of company logos and their industry icons
 */
const COMPANY_METADATA = {
  'TAP': {
    logo: '/logos/TAP.png', // Replace with actual logo path
    industryIcon: '🎓', // Education
    color: '#2AB090'
  },
  'VAES.AI': {
    logo: '/logos/vaes.jpg', // Replace with actual logo path
    industryIcon: '🏗️', // Construction/Engineering
    color: '#2AB090'
  },
  'Knowledge AI Inc': {
    logo: '/logos/kait.png',
    industryIcon: '🎓', // Education
    color: '#2AB090'
  },
  'Baseet.ai': {
    logo: '/logos/baseet.png',
    industryIcon: '🤖', // AI
    color: '#2AB090'
  },
  'Mixed Dimensions': {
    logo: '/logos/mixed.webp',
    industryIcon: '🎮', // Gaming/3D
    color: '#2AB090'
  }
};

function ExperienceCard({ title, company, location, period, description, achievements }) {
  const companyMeta = COMPANY_METADATA[company] || {
    logo: '/api/placeholder/48/48',
    industryIcon: '💼',
    color: '#2AB090'
  };

  return (
    <div className="p-6 rounded-lg transition-all duration-300 shadow-soft hover:shadow-mint
      dark:bg-dark-surface sepia:bg-sepia-surface bg-white relative group
      hover:-translate-y-1">
      
      {/* Left accent border with gradient */}
      <div className="absolute left-0 top-0 h-full w-1 
        bg-gradient-to-b from-primary to-primary-light rounded-l-lg" />
      
      {/* Company Logo and Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden 
          shadow-soft group-hover:shadow-mint transition-shadow duration-300">
          <img 
            src={companyMeta.logo} 
            alt={`${company} logo`} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <span className="text-2xl" title="Industry">{companyMeta.industryIcon}</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="font-medium">{company}</span>
            
            <div className="flex items-center gap-1 opacity-75">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{period}</span>
            </div>
            
            <div className="flex items-center gap-1 opacity-75">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-6 opacity-85 leading-relaxed">{description}</div>
      
      {/* Achievements */}
      {achievements.length > 0 && (
        <div>
          <h4 className="font-medium mb-3 text-primary flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-primary flex-shrink-0
                  group-hover/item:scale-125 transition-transform duration-300" />
                <span className="opacity-75 group-hover/item:opacity-100 transition-opacity duration-300">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Technologies Used - This would be great to add if you have this data */}
      {/* <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">
              {tech}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default ExperienceCard;