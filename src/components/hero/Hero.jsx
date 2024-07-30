
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
            <button>Resume🗒️</button>
            <button >Contact Me</button>
          </div>
          <img src="scroll.png" alt="Scroll"  />
        </div>
        <motion.div className="imageContainer">
          <img src="/image.jpg" alt="Hero" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Software Developer
      </motion.div>
    </div>
  );
};

export default Hero;

