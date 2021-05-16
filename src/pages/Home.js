import React from "react";

import { Link } from "react-router-dom";

//Images
import hand from "../img/hand.svg";
import name from "../img/name.svg";
import lines from "../img/lines.svg";

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
      <img className="lines" src={lines} alt="" />
      <StyledDesign>
        <Link style={{ textDecoration: "none" }} to="/websites">
          <motion.div
            className="circle"
            exit="exit"
            animate="show"
            initial="hidden"
            variants={homeCircle}
          >
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
            <motion.h1
              transition={{
                repeat: Infinity,
                duration: 0.75,
                ease: "easeInOut",
              }}
            >
              Portfolio
            </motion.h1>
          </motion.div>
        </Link>
      </StyledDesign>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding-top: 1rem;
  padding-bottom: 10vh;
  background: #393939;
  width: 100vw;
  overflow: hidden;

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
  .lines {
    display: none;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 10vh 0;
    .lines {
      display: block;
      height: 80%;
    }
  }
`;

const StyledDesign = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  /* background: blue; */
  height: 100%;

  .circle {
    position: relative;
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
    top: -80%;
    left: 50%;
    pointer-events: none;
    z-index: 10;
    /* background: white; */
  }
  h1 {
    color: #cc800e;
    font-size: 4.8rem;
  }
`;

export default Home;
