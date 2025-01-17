import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { motion } from "framer-motion";

const logoAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const navAnimation = {
  show: { 
    transition:{
      staggerChildren:.4,
      delayChildren:3.8,
      ease:"easeInOut"
    }
  }
}
const navText = {
  hidden: { 
    opacity: 0,
  },
  show: { 
    opacity: 1,
    transition:{
      ease:"easeInOut"
    }
  }
}

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar").style.padding = "10px 10px";
  } else {
     document.getElementById("navbar").style.padding = "30px 10px";
  }
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar" id="navbar">
      <motion.div
        variants={logoAnimation}
        initial="hidden"
        animate="show"
        className="app__navbar-logo"
      >
        <img src={images.gericht} alt="app__logo" />
      </motion.div>

      <motion.ul variants={navAnimation} initial="hidden" animate="show" className="app__navbar-links">
        <motion.li variants={navText} className="p__opensans">
          <a href="#home">Home</a>
        </motion.li>
        <motion.li variants={navText} className="p__opensans">
          <a href="#about">About</a>
        </motion.li>
        <motion.li variants={navText} className="p__opensans">
          <a href="#menu">Menu</a>
        </motion.li>
        <motion.li variants={navText} className="p__opensans">
          <a href="#awards">Awards</a>
        </motion.li>
        <motion.li variants={navText} className="p__opensans">
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
