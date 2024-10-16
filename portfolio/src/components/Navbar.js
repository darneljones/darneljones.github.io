// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-yellow-300 transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-yellow-300 transition">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-yellow-300 transition">
            <a href="/experience">Experience</a>
          </li>
          <li className="hover:text-yellow-300 transition">
            <a href="/skills">Skills</a>
          </li>
          <li className="hover:text-yellow-300 transition">
            <a href="/projects">Projects</a>
          </li>
          <li className="hover:text-yellow-300 transition">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
