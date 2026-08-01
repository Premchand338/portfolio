import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

export default App;
