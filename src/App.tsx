import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Education from "./_components/Education";
import Projects from "./_components/Projects";
import Certifications from "./_components/Certifications";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import ScrollToTop from "./_components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background-primary text-white">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
      <Analytics />
    </>
  );
}

export default App;
