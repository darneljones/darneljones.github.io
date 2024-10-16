// src/components/Skills.js
const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "CSS",
  "TailwindCSS",
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Skills;
