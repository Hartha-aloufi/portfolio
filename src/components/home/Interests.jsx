import SectionTitle from '../common/SectionTitle';

function Interests() {
  const interests = [
    { name: "Programming", icon: "💻" },
    { name: "History", icon: "📚" },
    { name: "Translating", icon: "🌍" },
    { name: "Cycling", icon: "🚲" },
    { name: "Farming", icon: "🌱" }
  ];

  const languages = [
    { name: "Arabic", proficiency: "100/100"},
    { name: "English", proficiency: "80/100"  }
  ];

  return (
    <section id="languages-interests" className="space-y-8">
      <div>
        <SectionTitle>Languages</SectionTitle>
        <div className="space-y-4">
          {languages.map((language, index) => (
            <div key={index} className="p-4 rounded-lg transition-all duration-300
              dark:bg-dark-surface sepia:bg-sepia-surface bg-white
              shadow-soft hover:shadow-mint">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </div>
                <span className="text-sm text-primary">{language.proficiency}</span>
              </div>
              <div className="w-full h-2 rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div 
                  className="h-full rounded-lg bg-gradient-to-r from-primary to-primary-light
                    transition-all duration-700 ease-out"
                  style={{ 
                    width: `${parseInt(language.proficiency)}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>Interests</SectionTitle>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg 
                transition-all duration-300 cursor-default
                dark:bg-dark-surface sepia:bg-sepia-surface bg-white
                shadow-soft hover:shadow-mint hover:-translate-y-1"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {interest.icon}
              </span>
              <span className="text-primary">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;