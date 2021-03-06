import React from "react";

//Routing
import { Link } from "react-router-dom";


//Images
import name from "../img/name-sm-or.svg";
import hero from "../img/art/hero.jpg";
import left from "../img/left.svg";
import right from "../img/right.svg";
import bliss from "../img/art/bliss.JPG";
// import corgi from "../img/art/corgi.PNG";
import crowned from "../img/art/crowned.JPG";
import fates from "../img/art/fates.jpg";
import rider from "../img/art/hand-rider.JPG";
import jimi from "../img/art/jimi.jpg";
import fatesVideo from "../img/art/Fates-Video-1.m4v";
import llama from '../img/art/llama.svg'
import swan from '../img/art/swan.svg'
import wolf from '../img/art/wolf.svg'

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { art, staggerImage, scrollDown } from "../animations";

const Art = () => {
  const images = [hero, bliss, crowned, fates, rider, llama, swan, wolf, jimi];

  const imageList = images.map((item) => (
    <motion.div variants={staggerImage} className="item" key={item}>
      <img src={item} alt="" />
    </motion.div>
  ));

  return (
    <StyledContainer exit="exit" animate="show" initial="hidden" variants={art}>
      <motion.div variants={scrollDown} className="logo">
        <Link to="/">
          <img src={name} alt="" />
        </Link>
      </motion.div>
      <div className="max-width">
        <div className="grid">
          {imageList}
          <motion.div variants={staggerImage} className="item">
            <video
              playsInline
              autoPlay
              loop
              muted
              src={fatesVideo}
              type="video/mp4"
              alt=""
            />
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
  padding: 10vh 2.5%;
  /* justify-content: space-between; */
  align-items: center;
  background: #5aa0c8;
  .max-width {
    max-width: 130rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    align-items: flex-start;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  /* .grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  } */
  .item {
    height: 100%;
    width: 100%;
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
  .nav-arrows {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    height: 10vh;
    /* background: gray; */
    bottom: 10vh;
    padding-left: calc(2.5vw - 1rem);
  }
  .logo {
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

export default Art;
