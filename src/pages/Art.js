import React from "react";

//Routing
import { Link } from "react-router-dom";

//Images
import name from "../img/name-sm-or.svg";
import hero from "../img/hero.jpg";
import left from "../img/left.svg";
import right from "../img/right.svg";
import bliss from "../img/art/bliss.JPG";
import corgi from "../img/art/corgi.PNG";
import crowned from "../img/art/crowned.JPG";
import fates from "../img/art/fates.jpg";
import rider from "../img/art/hand-rider.JPG";
import jimi from "../img/art/jimi.jpg";

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
      <div className="max-width">
        <div className="grid">
          <motion.div variants={staggerImage} className="item">
            <img src={hero} alt="" />
          </motion.div>
          <motion.div variants={staggerImage} className="item">
            <img src={bliss} alt="" />
          </motion.div>
          <motion.div variants={staggerImage} className="item">
            <img src={corgi} alt="" />
          </motion.div>
          <motion.div variants={staggerImage} className="item">
            <img src={crowned} alt="" />
          </motion.div>
          <motion.div variants={staggerImage} className="item">
            <img src={fates} alt="" />
          </motion.div>
          <motion.div variants={staggerImage} className="item">
            <img src={rider} alt="" />
          </motion.div>
          <motion.div variants={staggerImage} className="item">
            <img src={jimi} alt="" />
          </motion.div>
        </div>
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
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 10vh 0;
  /* justify-content: space-between; */
  align-items: center;
  background: #5aa0c8;
  .max-width {
    max-width: 100rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    align-items: flex-start;
    grid-column-gap: 2rem;
  }
  .item {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .nav-arrows {
    width: 100%;
    display: flex;
    align-items: center;
    height: 10vh;
    /* background: gray; */
    padding-left: calc(2.5vw - 1rem);
  }
  .logo {
    height: 10vh;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export default Art;
