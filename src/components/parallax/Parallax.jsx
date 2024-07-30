//import React from 'react'
import "./parallax.scss"
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const Parallax = ({type}) => {
  return (
    <div className="parallax"
    style={{
        background:
        type == "services"
        ? "linear gradient(180deg, #111132, #0c0c1d)"
        : "linear gradient(180deg, #111132, #505064)",
    }}
    >
        <motion.h1>{type=="services" ? "Explore me more?": "WorkShowcase"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets"></motion.div>
        <motion.div className="stars"></motion.div>
        </div>
    
  )
}
Parallax.propTypes = {
    type: PropTypes.func,
  };


export default Parallax