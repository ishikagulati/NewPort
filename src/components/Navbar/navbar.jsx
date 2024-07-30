  // import "./navbar.scss"
  // //import SideBar from"../SideBar/SideBar";
  // //import {motion} from "framer-motion"
  // const Navbar = () => {
  //   return (
  //     <div className="navbar">
  //     <div className="wrapper">
  //     <img
  //     src="/logoishika.jpg" alt="logo"
  //     ></img>
  //     </div>
  //     </div>
      
  //   )
  // }
  
  
  // export default Navbar
  //import React from 'react';
import './navbar.scss';
 // Ensure you have an image at this path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/logoishika.jpg" alt="Logo" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
