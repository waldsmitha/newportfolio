import React from "react";

//Routing
import { useLocation, Link } from "react-router-dom";

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
import { websites, expandCircle } from "../animations";

const Websites = () => {
  return (
    <StyledContainer
      exit="exit"
      animate="show"
      initial="hidden"
      variants={websites}
    >
      <motion.div
        className="corner-circle"
        exit="exit"
        animate="show"
        initial="hidden"
        variants={expandCircle}
      >
        <CornerCircle />
      </motion.div>
      <div className="logo">
        <Link to="/">
          <img src={name} alt="" />
        </Link>
      </div>
      <div className="grid">
        <div className="item">
          <img src={sage} alt="" />
          <div className="title">
            <h1>Sage</h1>
          </div>
        </div>
        <div className="item">
          <img src={ignite} alt="" />
          <div className="title">
            <h1>Ignite</h1>
          </div>
        </div>
        <div className="item">
          <img src={heart} alt="" />
          <div className="title">
            <h1>Heart Nouveau</h1>
          </div>
        </div>
      </div>
      <div className="nav-arrows">
        <Link to="/">
          <motion.img whileTap={{ scale: 1.2 }} src={left} alt="" />
        </Link>
        <Link to="/art">
          <motion.img whileTap={{ scale: 1.2 }} src={right} alt="" />
        </Link>
      </div>
      <div className="circles">
        <BackgroundCircles />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  .grid {
    /* background: gray; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;
    padding: 2rem 0;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  .item {
    cursor: pointer;
  }
  .nav-arrows {
    padding-bottom: 15vh;
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
`;

export default Websites;
