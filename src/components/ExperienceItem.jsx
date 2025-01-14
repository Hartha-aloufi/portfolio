function ExperienceItem({ title, company, period, location, description, achievements }) {
  return (
    <div className="border-l-2 border-primary/20 pl-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-primary">{title}</h4>
          <h3 className="">{company}</h3>
        </div>
        <div className="text-right text-sm text-primary-dark">
          <div>{period}</div>
          <div>{location}</div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2 italic">{description}</p>
      {achievements && achievements.length > 0 && (
        <div className="text-sm">
          <div className="font-medium mb-1 text-primary-dark">Achievements/Tasks:</div>
          <ul className="list-disc list-inside text-gray-950 [&>li]:mb-2">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExperienceItem;