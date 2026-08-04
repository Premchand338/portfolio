import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the error for this field as soon as the user starts fixing it
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      className="group w-full px-6 md:px-12 lg:px-20 py-8 bg-white dark:bg-transparent transition-all duration-300 hover:bg-white/95 dark:hover:bg-slate-950/95"
    >
      {/* Success toast */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-500/90 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
          ✅ Message sent! I'll get back to you soon.
        </div>
      )}

      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-transparent rounded-2xl p-8 md:p-16 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1">
        {/* Left side: info */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Connect . Collaborate .{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-6xl">
              Create .
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            If there's a real workflow problem — something that eats your time
            and causes repeat errors — I'm the teammate for sustainable
            solutions, not quick fixes that break later. Tell me the problem,
            I'll understand your business first, then build the tool.
          </p>

          <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 py-5">
            <a
              href="mailto:iamprem338@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ✉️ iamprem338@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/premchand-shahu/"
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

          <div className="mt-10 bg-gray-100/50 dark:bg-gray-950/50 border border-gray-400 dark:border-white/70 rounded-xl p-4">
            <p className="font-medium text-gray-900 dark:text-white">
              📍 Mumbai , India
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Open to Remote work, IST hours, flexible for overlap.
            </p>
          </div>
        </div>

        {/* Right side: form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full bg-transparent border rounded px-3 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-400 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full bg-transparent border rounded px-3 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me what you're working on..."
              className={`w-full bg-transparent border rounded px-3 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 dark:border-white/20 focus:border-blue-500 dark:focus:border-blue-400"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="relative overflow-hidden rounded-full px-8 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_18px_70px_-28px_rgba(139,92,246,0.8)] hover:-translate-y-1 hover:shadow-[0_22px_95px_-35px_rgba(236,72,153,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-400/40"
          >
            Send Message →
          </button>

          <p className="text-center text-gray-500 dark:text-gray-500 text-sm">
            Or just email me — I read every message myself.
          </p>
        </form>
      </div>

      <div className="max-w-full mx-auto mt-16 pt-8 border-t border-gray-300 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-500">
        <p>© 2026 Premchand Shahu</p>
        <p className="flex items-center gap-1">
          Creating AI & automation-driven experiences{" "}
        </p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </section>
  );
}

export default Contact;