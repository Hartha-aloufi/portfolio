import Hero from '../components/home/Hero';
import Experience from '../components/home/Experience';
import Skills from '../components/home/Skills';
import Education from '../components/home/Education';
import Contact from '../components/home/Contact';
import Interests from '../components/home/Interests';

/**
 * Home page component that composes all sections of the portfolio
 */
function Home() {
  return (
    <div className="space-y-16 pt-16">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Contact />
        <Interests />
      </div>
    </div>
  );
}

export default Home;