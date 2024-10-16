// src/components/Home.js

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 flex items-center justify-center"
    >
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse">
          Hi, I'm Darnel Jones Jr
        </h1>
        <p className="text-xl md:text-2xl">Lead Technical Consultant</p>
        <p className="mt-6">
          I specialize in creating fun, interactive web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
