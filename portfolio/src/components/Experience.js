// src/components/Experience.js
const experiences = [
  {
    company: "Tech Solutions",
    role: "Senior Web Developer",
    duration: "2019 - Present",
    description: "Lead web development projects using React and Node.js.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li key={exp.company} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">
                {exp.company} - {exp.duration}
              </p>
              <p className="mt-4">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Experience;
