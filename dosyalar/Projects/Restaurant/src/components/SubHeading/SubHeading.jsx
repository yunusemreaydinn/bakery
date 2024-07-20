import React from "react";
import { easeInOut, motion } from "framer-motion";
import { images } from "../../constants";

const typingContainer = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      ease: easeInOut,
    },
  },
};

const typingText = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easeInOut,
    },
  },
};

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <motion.p
      variants={typingContainer}
      initial="hidden"
      animate="show"
      className="p__cormorant"
    >
      {Array.from(`${title}`).map((word, i) => (
        <motion.span variants={typingText} key={i}>
          {word}
        </motion.span>
      ))}
    </motion.p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
