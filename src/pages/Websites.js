import React from "react";

//Routing
import { Link } from "react-router-dom";

//Images
import name from "../img/name-sm-bl.svg";
import sage from "../img/sage.svg";
import heart from "../img/heart.svg";
import camera from "../img/camera.svg";
import ignite from '../img/ignite.svg'
import left from "../img/left.svg";
import right from "../img/right.svg";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { websites, scaleDown, scrollDown, grid } from "../animations";

const Websites = () => {
  return (
    <StyledContainer
      exit="exit"
      animate="show"
      initial="hidden"
      variants={websites}
    >
      <motion.div variants={scrollDown} className="logo">
        <Link to="/">
          <img src={name} alt="" />
        </Link>
      </motion.div>

      <motion.div
        variants={grid}
        initial="hidden"
        animate="show"
        exit="exit"
        className="grid"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={scaleDown}
          className="item"
        >
          <a
            href="https://fervent-sammet-4ebc43.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <motion.img whileHover={{ y: -10 }} src={sage} alt="" />
            <div className="title">
              <h1>Sage</h1>
            </div>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={scaleDown}
          className="item"
        >
          <a
            href="https://waldsmitha.github.io/heart/"
            rel="noreferrer"
            target="_blank"
          >
            <motion.img whileHover={{ y: -10 }} src={heart} alt="" />
            <div className="title">
              <h1>Heart Nouveau</h1>
            </div>
          </a>
        </motion.div>
        <motion.div variants={scaleDown} className="item">
          <a
            href="https://focused-einstein-501c8e.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <motion.img whileHover={{ y: -10 }} src={camera} alt="" />
            <div className="title capture">
              <h1>Capture</h1>
              <h2>From Lesson</h2>
              <h2>developedbyed.com</h2>
            </div>
          </a>
        </motion.div>
        <motion.div variants={scaleDown} className="item">
          <a
            href="https://gifted-bardeen-3faafd.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <motion.img whileHover={{ y: -10 }} src={ignite} alt="" />
            <div className="title">
              <h1>Ignite</h1>
              <h2>From Lesson</h2>
              <h2>developedbyed.com</h2>
            </div>
          </a>
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
      {/* <div className="circles">
        <BackgroundCircles />
      </div> */}
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
  position: relative;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;
    align-items: center;
    grid-row-gap: 2rem;
  }
  .item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #f2f2f2;
    }

    .title {
      padding-top: 1rem;
      text-align: center;
    }
    .capture {
      h1 {
        font-family: "Lobster", cursive;
      }
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
  }
  .corner-circle {
    position: absolute;
    top: 0;
    right: 0;
  }
  .logo {
    overflow: hidden;
    height: 8vh;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: calc(2.5vw);
    img {
      transform: scale(0.8);
    }
  }
`;

export default Websites;
