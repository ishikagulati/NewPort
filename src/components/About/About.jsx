import { description } from '../../info';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <section className="text-center my-10" id='about'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-secondary text-3xl font-bold sm:text-4xl">
        About
      </motion.h2>

      {/* Replaced motion.p with motion.div */}
      <motion.div
        className="text-gray-400 text-lg mt-5 text-justify sm:text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {description.map((items, index) => (
          <p className='mt-2' key={index}>{items}</p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
