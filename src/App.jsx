import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold uppercase">
          Hi, I'm Premchand Shahu
        </h1>
      </div>
      <Projects />
    </div>
  );
}

export default App;
