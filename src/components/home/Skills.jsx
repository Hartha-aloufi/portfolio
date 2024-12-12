import SectionTitle from '../common/SectionTitle';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      skills: ["Reactjs", "Javascript", "HTML", "CSS", "Redux", "React Query"]
    },
    {
      title: "UI Frameworks",
      icon: "🎨",
      skills: ["Antd", "Material UI"]
    },
    {
      title: "Computer Science",
      icon: "🧮",
      skills: ["Algorithms", "Data Structures", "Problem Solving"]
    },
    {
      title: "Backend & Cloud",
      icon: "☁️",
      skills: ["Python", "AWS", "Serverless"]
    },
    {
      title: "Graphics & 3D",
      icon: "🎮",
      skills: ["Babylonjs", "3D", "WebGL"]
    },
    {
      title: "Other Skills",
      icon: "🛠️",
      skills: ["Web Performance", "E2E Testing", "Networks", "i18n", "Teaching Technical Skills"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-16">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} 
            className="group p-6 rounded-lg transition-all duration-300
              dark:bg-dark-surface sepia:bg-sepia-surface bg-white
              shadow-soft hover:shadow-mint">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 rounded-lg bg-primary/5 text-primary 
                    text-sm transition-all duration-300
                    hover:bg-primary hover:text-white
                    group-hover:translate-y-[-2px]"
                  style={{ transitionDelay: `${skillIndex * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;