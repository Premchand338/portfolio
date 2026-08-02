import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="contact" className="w-full px-6 md:px-12 lg:px-20 py-8 bg-white dark:bg-transparent">
      {/* Success toast */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-500/90 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
          ✅ Message sent! I'll get back to you soon.
        </div>
      )}

      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-transparent rounded-2xl p-8 md:p-16">
        {/* Left side: info */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Connect . Collaborate .{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-6xl">
              Create .
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            If There's a real workflow problem — something that eats your time &
            causes errors today. The team wants sustainable solutions, not quick
            fixes that break later , I can understand your business first, then
            build the tool.
          </p>

          <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 py-5">
            <a
              href="mailto:iamprem338@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ✉️ iamprem338@gmail.com
            </a>
            <a  href="https://www.linkedin.com/in/premchand-shahu/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/Premchand338/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              🐙 GitHub
            </a>
          </div>

          <div className="mt-10 bg-gray-100/50 dark:bg-gray-950/50 border border-gray-300 dark:border-white/70 rounded-xl p-4">
            <p className="font-medium text-gray-900 dark:text-white">📍 Mumbai , India</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Open to Remote work, IST hours, flexible for overlap.
            </p>
          </div>
        </div>

        {/* Right side: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border rounded border-gray-300 dark:border-white/10 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent border rounded border-gray-300 dark:border-white/10 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me what you're working on..."
              className="w-full bg-transparent border rounded border-gray-300 dark:border-white/20 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-linear-to-r from-blue-400 to-purple-500 hover:opacity-90 transition-opacity rounded-full py-3 font-semibold text-white"
          >
            Send Message →
          </button>

          <p className="text-center text-gray-500 dark:text-gray-500 text-sm">
            Or just email me — I read every message myself.
          </p>
        </form>
      </div>

      <p className="text-gray-500 dark:text-gray-600 text-sm mt-12 text-center">
        @ Premchand Shahu - Creativity is intelligence having fun
      </p>
    </section>
  );
}

export default Contact;