
import About from "./components/jsx/About.jsx"
import Contact from "./components/jsx/Contact.jsx"
import Footer from "./components/jsx/Footer.jsx"
import Hero from "./components/jsx/Hero.jsx"
import Navbar from "./components/jsx/Navbar.jsx"
import Projects from "./components/jsx/Projects.jsx"
import Resume from "./components/jsx/Resume.jsx"
import Skills from "./components/jsx/Skills.jsx"
function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
