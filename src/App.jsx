import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2c3e50] to-[#0f2027] text-white items-center justify-center">
      {/* Header Section */}
      <div className="bg-black/30 backdrop-blur-sm text-white p-4">
        <div className="max-w-6xl mx-auto">
          <Header />
        </div>
      </div>

      {/* Main Content */}
      <main className="py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Row 1: About + Skills side-by-side */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <About />
            </div>
            <div className="w-full md:w-1/2">
              <Skills />
            </div>
          </div>

          {/* Row 2: Projects full width */}
          <div>
            <Projects />
          </div>

          {/* Row 3: Contact full width */}
          <div>
            <Contact />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
