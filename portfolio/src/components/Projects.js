// src/components/Projects.js
const projects = [
  {
    name: "Interactive Portfolio",
    description: "A personal portfolio website built with React and TailwindCSS.",
    url: "https://github.com/username/portfolio",
  },
  {
    name: "E-commerce Platform",
    description: "A complete full-stack e-commerce platform built using the MERN stack.",
    url: "https://github.com/username/ecommerce",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition"
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-4">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.url} className="text-blue-500 hover:text-blue-700 font-bold">
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
