import SectionTitle from '../common/SectionTitle';

function Education() {
  return (
    <section id="education" className="scroll-mt-16">
      <SectionTitle>Education</SectionTitle>
      <div className="p-6 rounded-lg transition-colors duration-300
        dark:bg-dark-surface sepia:bg-sepia-surface bg-gray-50">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold">Software Engineering</h3>
            <p className="text-primary">Al-Balqa' Applied University (BAU)</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75">2013 - 2017</p>
            <p className="text-sm opacity-75">Bachelor's Degree</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;