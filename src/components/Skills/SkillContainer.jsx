
import  { useEffect, useRef } from 'react';
import SkillGroup from './SkillGroup';
import { learning, language, frontend, backend, tools } from '../../info';
import { motion } from 'framer-motion';
import "./SkillContainer.scss";

const SkillContainer = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('inView');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="i3" ref={sectionRef}>
      <motion.h2 
        className="i4">Skills</motion.h2>
      <p className='i5'>Here are some of the skills I have dedicated the past year to refining and mastering.</p>
      
      <motion.div className="i6">
        <SkillGroup data={frontend} title="Frontend" />
        <SkillGroup data={backend} title="Backend" />
        <SkillGroup data={ tools} title="Tools" />
        <SkillGroup data={language} title="Languages" />
        <SkillGroup data={learning} title="Learning"/>
       
      </motion.div>
    </section>
  );
}

export default SkillContainer;


