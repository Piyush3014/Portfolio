
 import Navbar from "./Components/Navbar";
 import About from "./Components/About";
 import Skills from "./Components/Skills";
 import Projects from "./Components/Projects";
 import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <main>
         <About />
        <Skills />
        <Projects />
         <Contact />  
      </main>
    </div>
  );
}

 export default App;