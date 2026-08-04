import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechMarquee from "./components/TechMarquee";
import CustomCursor from "./components/CustomCursor";
// import DecorativeBackground from "./components/DecorativeBackground";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-10">
      {/* <CustomCursor /> */}
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <section id="skills" className="relative px-6 md:px-12 lg:px-20 pb-20 bg-white dark:bg-gray-950 scroll-mt-24">
         {/* <DecorativeBackground variant="skillsAbout" /> */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Skills />
          <About />
        </div>
      </section>

      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
