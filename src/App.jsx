import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechMarquee from "./components/TechMarquee";




function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
