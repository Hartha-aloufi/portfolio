import SectionTitle from '../common/SectionTitle';
import ExperienceCard from './ExperienceCard';

function Experience() {
  const experiences = [
    {
      title: "Frontend Trainer (Part-Time)",
      company: "TAP",
      location: "Palestine",
      period: "09/2023 - Present",
      description: "Taught frontend development to fresh graduates through online sessions, live coding, and mentorship.",
      achievements: [
        "Trained over 60 students in essential frontend development skills.",
        "Guided students throughout their learning journey with personalized mentorship and hands-on support."
      ]
    },
    {
      title: "Senior Front-end Engineer",
      company: "VAES.AI",
      location: "Dubai",
      period: "05/2022 - 06/2024",
      description: "VAES.AI is a startup focused on automating the workflows of structural engineers. As a senior front-end engineer, I led a small web development team (2–3 developers) and played a key role in the end-to-end development of innovative solutions.",
      achievements: [
        "Spearheaded the entire web application lifecycle, from requirements gathering to front-end and back-end development, and conducted iterative evaluations based on stakeholder feedback."
      ]
    },
    {
      title: "Senior Front-end Engineer",
      company: "Knowledge AI Inc",
      location: "Amman",
      period: "11/2020 - 05/2022",
      description: "Contributed to an education platform with extensive real-time features as part of a large front-end team (6 developers). Served as a senior developer, mentoring teammates and ensuring adherence to best practices.",
      achievements: [
        "Established and enforced workflow best practices and coding standards.",
        "Mentored junior developers to enhance their skills and productivity.",
        "Participated in interviewing and onboarding new developers."
      ]
    },
    {
      title: "Front-end Engineer",
      company: "Baseet.ai",
      location: "Amman",
      period: "09/2019 - 09/2020",
      description: "Baseet.ai is a platform for visually creating AI-powered applications, enabling users to build exceptional AI apps through drag-and-drop functionality without writing code.",
      achievements: [
        "Led the front-end development of two fast and feature-rich web application",
        "      Node Editor: An interactive drag-and-drop editor for designing AI workflows",
        "      Code Editor: A smart code editor tailored for data science use cases."
      ]
    },
    {
      title: "Software Engineer",
      company: "Mixed Dimensions",
      location: "Amman",
      period: "05/2017 - 09/2019",
      description: "I was responsible for building web and webGL apps using modern front-end technologies.",
      achievements: [
        "Building 3D viewer/editor using webGL technology",
        "Maintain many web apps built in different stacks"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Mixed Dimensions",
      location: "Amman",
      period: "08/2015 - 05/2017",
      description: "Mixed Dimensions develop software to disrupt the way people use technology, 3D Printing, Virtual Reality, and 3D Interactive Experiences.",
      achievements: [
        "Build many prototypes and show cases using widely different stacks, like python, c++ and openGL, c# and javascripts"
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-16">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}

export default Experience;