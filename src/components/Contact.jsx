import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

const [showSuccess, setShowSuccess] = useState(false)


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
     e.preventDefault()
    console.log("Form submitted:", formData)

    // Reset form fields
    setFormData({ name: "", email: "", message: "" })

    // Show success message
    setShowSuccess(true)

    // Auto-hide after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <section id="contact" className="px-6 md:px-16 py-24 bg-gray-950">

        
      {/* Success toast */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-500/90 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
          ✅ Message sent! I'll get back to you soon.
        </div>
      )}
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-900 border border-white/10 rounded-2xl p-8 md:p-12">
        
        {/* Left side: info */}
        <div>
          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
            <span className="text-2xl">✈️</span>
          </div>

          <h2 className="text-3xl font-bold mb-8">
            Let's build something real.
          </h2>

          <div className="flex flex-col gap-4 text-gray-300">
            <a href="mailto:youremail@example.com" className="hover:text-blue-400 transition-colors">
              ✉️ youremail@example.com
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              💼 LinkedIn
            </a>
            <a href="https://github.com/Premchand338" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              🐙 GitHub
            </a>
          </div>

          <div className="mt-10 bg-gray-800/50 border border-white/10 rounded-xl p-4">
            <p className="font-medium">📍 Nashik, India</p>
            <p className="text-gray-500 text-sm mt-1">
              Open to remote work, IST hours, flexible for overlap.
            </p>
          </div>
        </div>

        {/* Right side: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400 mb-1 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me what you're working on..."
              className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity rounded-full py-3 font-semibold"
          >
            Send Message →
          </button>

          <p className="text-center text-gray-500 text-sm">
            Or just email me — I read every message myself.
          </p>
        </form>
      </div>

      <p className="text-gray-600 text-sm mt-12 text-center">
        © 2026 Premchand Shahu. Built with React & Tailwind.
      </p>
    </section>
  )
}

export default Contact