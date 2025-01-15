import DownloadButton from '../common/DownloadButton';
import ExperienceItem from '../ExperienceItem';

function Layout() {
  return (
    <div className={`min-h-screen bg-[#313b47] py-10`}>
      <main className="max-w-[1000px] print:max-w-[1150px] mx-auto bg-white">
        {/* Header Section */}
        <header className="flex gap-6 p-8  border-b-2 border-primary ">
          {/* Left side - Name and Title */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">Hartha Aloufi</h1>
            <h2 className="text-xl text-primary mb-4">Senior Front-end/Fullstack Engineer</h2>
            <p className="text-sm leading-relaxed text-black ">
              I am a computer engineer specializing in JavaScript, ReactJS frontend, and serverless technologies. With 8 years of experience in web app development across education, AI, construction, and 3D printing
            </p>
          </div>

          {/* Middle - Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
              <img
                src="/me.jpg"
                alt="Hartha Aloufi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div className="text-right text-sm space-y-1 flex-1">
            <a href="mailto:hartha.aloufi@gmail.com" className="block hover:text-primary">
              hartha.aloufi@gmail.com
            </a>
            <a href="tel:+962785509479" className="block hover:text-primary">
              +962 785509479
            </a>
            <span className="block">Amman, Jordan</span>
          </div>
        </header>

        <div className="flex">

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Work Experience Section */}
            <section className="mb-8">
              <h3 className="font-bold mb-6 text-lg">WORK EXPERIENCE</h3>
              <div className="space-y-6">
                <ExperienceItem
                  title="Frontend trainer (part time)"
                  company="TAP (Remote)"
                  period="09/2023 - 01/2025"
                  location="Palestine"
                  description="Try something new! Teaching frontend development online to fresh graduates."
                  achievements={[
                    "Help more than 60 people to learn frontend skills",
                    "Mentor the student learning journey, giving online sessions and live coding...etc"
                  ]}
                />

                <ExperienceItem
                  title="Senior Front-end Engineer"
                  company="VAES.AI (Remote)"
                  period="05/2022 - 10/2024"
                  location="Dubai"
                  description="VAES.AI is a startup focused on automating the workflows of structural engineers. As a senior front-end engineer, I led a small web development team (2–3 developers) and played a key role in the end-to-end development of innovative solutions."
                  achievements={[
                    "Designed and developed a B2B application to streamline structural engineering workflows and customer communication",
                    "Spearheaded the entire web application lifecycle, from requirements gathering to front-end and back-end development.",
                    "Securely manage and share very large files",
                  ]}
                />

                <ExperienceItem
                  title="Senior Front-end Engineer"
                  company="Knowledge AI Inc (Remote)"
                  period="11/2020 - 05/2022"
                  location="Amman"
                  description="Working on education platform with extensive real time features. The frontend team was relatively big 6 devs and I act as the senior developer"
                  achievements={[
                    "Build a real-time collaborative educational tools for the platform",
                    "Working with a big Motivated front-end team",
                    "Guide and help our junior teammates"
                  ]}
                />

                <ExperienceItem
                  title="Front-end Engineer"
                  company="Baseet.ai"
                  period="09/2019 - 09/2020"
                  location="Amman"
                  description="Baseet.ai is a service that enables the creation of AI-powered applications visually. It's like 'WIX for AI apps.' Using Baseet.ai, you can drag-and-drop nodes/models to construct exceptional AI apps without writing any code."
                  achievements={[
                    "My responsibility was to lead the front-end effort to build 2 fast and rich web apps: The node editor(interactive drag and drop editor) and the code editor (smart code editor for Data since)",
                  ]}
                />

                <ExperienceItem
                  title="Software Engineer"
                  company="Mixed Dimensions"
                  period="05/2016 - 09/2019"
                  location="Amman"
                  description="I began as an intern during my college years and transitioned into a full-time role, contributing to the development of innovative web and WebGL applications using modern front-end technologies."
                  achievements={[
                    "Building 3D viewer/editor using webGL technology",
                    "Maintain many web apps built in different stacks"
                  ]}
                />
              </div>
            </section>
          </div>

          {/* Left Sidebar */}
          <aside className="w-96 p-8 ">
            {/* Skills Section */}
            <section className="mb-8">
              <h3 className="font-bold mb-4 text-lg">SKILLS</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="block text-sm font-medium">Frontend</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Reactjs</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">React Query</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Serverless</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">SST</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Nextjs</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">AWS</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Graphql</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Nodejs</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">PG</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">E2E testing</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">web performance</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Material ui</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Antd</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">css</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Redux</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">python</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Networks</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Babylonjs</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">3D</span>
                    <span className="px-2 py-1 bg-primary/10  text-primary-dark text-xs rounded">i18n</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary-dark text-xs rounded">Teaching technical skills</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="block text-sm font-medium">Core</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Algorithms</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Data Structure</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Problem solving</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="mb-8">
              <h3 className="font-bold mb-4 text-lg">EDUCATION</h3>
              <div className="space-y-2">
                <div>
                  <span className="block">AL- BALQA' APPLIED UNIVERSITY
                    (BAU)
                  </span>
                  <span className="block text-xs text-gray-600">Software engineering</span>
                  <span className="text-xs text-gray-600">2013 - 2017</span>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="mb-8">
              <h3 className="font-bold mb-4 text-lg">LANGUAGES</h3>
              <div className="space-y-2">
                <div>
                  <span className="block text-sm">Arabic</span>
                  <span className="text-xs text-gray-600">Native</span>
                </div>
                <div>
                  <span className="block text-sm">English</span>
                  <span className="text-xs text-gray-600">Professional Working Proficiency</span>
                </div>
              </div>
            </section>

            {/* Interests Section */}
            <section>
              <h3 className="font-bold mb-4 text-lg">INTERESTS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Building apps</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Programming</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">History</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Cycling</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Farming</span>
              </div>
            </section>
          </aside>
        </div>
      </main>
      <DownloadButton />
    </div>
  );
}

export default Layout;