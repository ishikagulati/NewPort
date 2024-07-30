
import "./app.scss"
import Hero from "./components/hero/Hero.jsx"
import Header from "./components/Header/Header.jsx"
import Skills from "./components/Skills/SkillContainer.jsx"
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/About/About.jsx"
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {

  return (
    <div>
      <section className="pre" id="homepage">
        
         <Header/>
         <Hero/>
         
         
        </section>
        
  
      <section className="post" ><Parallax type="services"/></section>
      <section className="wow" id="about"><About/> </section>
      <section className="ish" id="skills"><Skills/></section>
      
      <section id="projects" className="balle"><Parallax type="portfolio"/></section>
      <Projects/>
     
      <section id="contact" className="shawa">
        <Contact/>
        
      </section>
      <section className="gar">
      <Footer/>
      </section>

      
     </div>

  )
}
  

export default App
 