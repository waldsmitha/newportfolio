import React from "react";

import { Link } from "react-router-dom";

//Images
import hand from "../img/hand.svg";
import name from "../img/name.svg";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  home,
  homeCircle,
  homeHand,
  homeLogo,
  staggerRight,
} from "../animations";

const Home = () => {
  return (
    <StyledContainer
      exit="exit"
      animate="show"
      initial="hidden"
      variants={home}
    >
      <motion.div
        className="logo"
        exit="exit"
        animate="show"
        initial="hidden"
        variants={homeLogo}
      >
        <img src={name} alt="" />
        <ul>
          <motion.li variants={staggerRight}>Designer</motion.li>
          <motion.li variants={staggerRight}>Developer</motion.li>
          <motion.li variants={staggerRight}>Artist</motion.li>
        </ul>
      </motion.div>
      <StyledDesign>
        <motion.img
          className="logo"
          exit="exit"
          animate="show"
          initial="hidden"
          variants={homeHand}
          id="hand"
          src={hand}
          alt=""
        />
        <Link style={{ textDecoration: "none" }} to="/websites">
          <motion.div
            className="circle"
            exit="exit"
            animate="show"
            initial="hidden"
            variants={homeCircle}
          >
            <h1>Portfolio</h1>
          </motion.div>
        </Link>
      </StyledDesign>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  padding: 1.25rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 85vh;
  background: #393939;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 2rem;

    li {
      font-size: 1.4rem;
      list-style-type: none;
    }
  }
  .logo {
    img {
      width: 100%;
    }
  }
`;

const StyledDesign = styled(motion.div)`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  padding-bottom: 2rem;

  .circle {
    cursor: pointer;
    margin: 0 auto;
    height: 90vw;
    width: 90vw;
    max-width: 30rem;
    max-height: 30rem;
    background: #f2f2f2;
    border: 2.5rem #5aa0cb solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #hand {
    position: absolute;
    top: -10%;
    right: 0;
    pointer-events: none;
  }
  h1 {
    color: #cc800e;
    font-size: 4.8rem;
  }
`;

export default Home;
