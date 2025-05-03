// src/components/Contact.js
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-teal-500">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-100 mt-6 mb-6">
          Get in Touch
        </h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
