
 import "./hero.scss";
 import { motion } from "framer-motion";

 

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        
          <div className="textContainer">
          <h2 >ISHIKA GULATI</h2>
          <h1 >Software Developer</h1>
          <div className="buttons">
            <button ><a href="https://drive.google.com/file/d/1qDS1Iq1Igq_Yu9o3w72DZNbHQFeEmlDP/view">Resume</a></button>
            <button ><a href="#contact">Contact</a></button>
          </div>
          <a href="#scroll"> <img src="scroll.png" alt="Scroll"  /></a>
        </div>
        <motion.div className="imageContainer">
          <img src="/rbg1.png" alt="Hero"  />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Software Developer
      </motion.div>
    </div>
  );
};

export default Hero;

