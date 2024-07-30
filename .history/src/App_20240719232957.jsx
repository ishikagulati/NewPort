
import "./app.scss"
import Hero from "./components/hero/Hero.jsx"
import Header from "./components/Header/Header.jsx"
//import Skills from "./components/Skills/SkillContainer.jsx"
//import About from "./components/About/About.jsx"
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/About/About.jsx"
import Projects from "./components"
function App() {

  return (
    <div>
      <section id="Homepage">
         <Header/>
         <Hero/>  
         {/* <Skills/> */}
         
        </section>
        
  
      <section id="Services"><Parallax type="services"/></section>
      <About/>
      <section>Services</section>
      <section id="Projects"><Parallax type="portfolio"/></section>
      <Projects/>
     
      <section id="Contact">Contact</section>

      
     </div>

  )
}
  

export default App
 