import React from "react";

//Routing
import { Link } from "react-router-dom";

//Images
import name from "../img/name-sm-or.svg";
import hero from "../img/hero.jpg";
import left from "../img/left.svg";
import right from "../img/right.svg";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { art, staggerImage } from "../animations";

const Art = () => {
  return (
    <StyledContainer exit="exit" animate="show" initial="hidden" variants={art}>
      <div className="logo">
        <Link to="/">
          <img src={name} alt="" />
        </Link>
      </div>
      <div className="grid">
        <motion.div variants={staggerImage} className="item">
          <img src={hero} alt="" />
        </motion.div>
        <motion.div variants={staggerImage} className="item">
          <img src={hero} alt="" />
        </motion.div>
        <motion.div variants={staggerImage} className="item">
          <img src={hero} alt="" />
        </motion.div>
      </div>
      <div className="nav-arrows">
        <Link to="/websites">
          <motion.img whileTap={{ scale: 1.2 }} src={left} alt="" />
        </Link>
        <Link to="/contact">
          <motion.img whileTap={{ scale: 1.2 }} src={right} alt="" />
        </Link>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  padding: 1.25rem;
  background: #5aa0c8;
  min-height: 100vh;
  width: 100vw;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 2rem 0;
  }
  .item {
    margin: 1rem 0;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .nav-arrows {
    padding-bottom: 15vh;
  }
`;

export default Art;
