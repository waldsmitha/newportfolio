import React from "react";

//Routing
import { Link } from "react-router-dom";

//Components
import CornerCircle from "../components/CornerCircle";
import BackgroundCircles from "../components/BackgroundCircles";

//Images
import name from "../img/name-sm-bl.svg";
import sage from "../img/sage.svg";
import heart from "../img/heart.svg";
import ignite from "../img/ignite.svg";
import left from "../img/left.svg";
import right from "../img/right.svg";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { websites, expandCircle, scaleDown, scrollDown } from "../animations";

const Websites = () => {
  return (
    <StyledContainer
      exit="exit"
      animate="show"
      initial="hidden"
      variants={websites}
    >
      {/* <motion.div
        className="corner-circle"
        exit="exit"
        animate="show"
        initial="hidden"
        variants={expandCircle}
      >
        <CornerCircle />
      </motion.div> */}
      <motion.div className="logo" variants={scrollDown}>
        <Link to="/">
          <img src={name} alt="" />
        </Link>
      </motion.div>

      <motion.div className="grid">
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={scaleDown}
          className="item"
        >
          <motion.img whileHover={{ y: -10 }} src={sage} alt="" />
          <div className="title">
            <h1>Sage</h1>
          </div>
        </motion.div>
        <motion.div variants={scaleDown} className="item">
          <motion.img whileHover={{ y: -10 }} src={ignite} alt="" />
          <div className="title">
            <h1>Ignite</h1>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={scaleDown}
          className="item"
        >
          <motion.img whileHover={{ y: -10 }} src={heart} alt="" />
          <div className="title">
            <h1>Heart Nouveau</h1>
          </div>
        </motion.div>
      </motion.div>
      <div className="nav-arrows">
        <Link to="/">
          <motion.img whileTap={{ scale: 1.2 }} src={left} alt="" />
        </Link>
        <Link to="/art">
          <motion.img whileTap={{ scale: 1.2 }} src={right} alt="" />
        </Link>
      </div>
      <div className="circles">{/* <BackgroundCircles /> */}</div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10vh 0;
  width: 100vw;
  max-width: 100rem;
  margin: 0 auto;
  justify-content: center;
  /* align-items: center; */
  position: relative;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    align-items: center;
  }
  .item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      padding-top: 1rem;
      text-align: center;
    }
  }
  .nav-arrows {
    position: fixed;
    bottom: 10vh;
    left: calc(2.5vw - 2rem);
    width: 100%;
    display: flex;
    align-items: center;
    height: 10vh;

    img {
      margin: 0 1rem;
    }
  }
  .circles {
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .corner-circle {
    position: absolute;
    top: 0;
    right: 0;
  }
  .logo {
    height: 10vh;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
  /* @media screen and (min-width: 768px) {
    .logo {
      display: none;
    }
  } */
`;

export default Websites;