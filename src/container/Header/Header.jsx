import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import { easeInOut, motion } from 'framer-motion'

const typingAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: easeInOut,
      duration: 2,
      delay: 2
    }
  }
}

const explainProduct = {
  hidden: { opacity: 0, y:"-20px"},
  show: { 
    opacity: 1, 
    y:"0", 
    transition:{
      delay:2.2,
      ease:"easeInOut",
      duration:1
    }
  }
}

const buttonProduct = {
  hidden: { opacity: 0, scaleX:0},
  show: { 
    opacity: 1, 
    scaleX:1,
    transition:{
      duration:.8,
      delay:2.3,
      type:'tween'
    }
  }
}

const welcomeImg = {
  hidden: { 
    opacity: 0,
    y:400,
    x:400
  },
  show: { 
    opacity: 1,
    y:0,
    x:0,
    transition:{
      duration:1,
      delay:3,
      ease:"easeInOut"
    }
  }
}

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />

      <motion.h1 
      variants={typingAnimation}
      initial="hidden"
      animate="show"
      className="app__header-h1">
      The Key To Fine Dining
      </motion.h1>

      <motion.p variants={explainProduct} initial="hidden" animate="show" className="p__opensans" style={{ margin: "2rem 0" }}>
      Experience a warm atmosphere filled with fresh and delicious dishes in every season. Discover our tables that make you feel at home.
      </motion.p>

      <motion.button variants={buttonProduct} initial="hidden" animate="show" type="button" className="custom__button">
        <a style={{color:"#000000"}} href="#menu">Explore Menu</a>
      </motion.button>

    </div>

    <div className="app__wrapper_img">
      <motion.img 
      variants={welcomeImg}
      initial="hidden"
      animate="show"
      src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
