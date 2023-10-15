import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Home.css';

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Animate the text from the right when the component mounts
    controls.start({
      x: 0, // Final position
      opacity: 1, // Make the text visible
      transition: {
        duration: 3, // Duration of the animation
      },
    });
  }, [controls]);

  return (
    <div className="home-container">
      <div className="home-text-container">
        <motion.h1
          className="home-text"
          initial={{ x: 200, opacity: 0 }} // Initial position and opacity
          animate={controls} // Animation controls
        >
          💞💘💋 <br /> <h3> I love You Dear Pooja So So Soooo Much </h3> <br />💞💘💋 
        </motion.h1>
      </div>
    </div>
  );
};

export default Home;
