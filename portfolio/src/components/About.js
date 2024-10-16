// src/components/About.js
const About = () => {
  return (
    <section id="about" className="py-16 bg-yellow-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-900 mb-6">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          I'm a passionate web developer with over 8 years of experience in full-stack development. My expertise includes React, Node.js, and UI/UX design.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Avatar"
            className="w-48 h-48 rounded-full border-4 border-yellow-500 shadow-lg hover:shadow-xl transition"
          />
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-2">Key Skills</h3>
            <ul className="list-disc list-inside text-lg">
              <li>JavaScript & React</li>
              <li>Node.js & Express</li>
              <li>UI/UX Design</li>
              <li>Project Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
