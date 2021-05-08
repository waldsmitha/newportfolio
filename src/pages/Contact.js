import React from "react";

//Routing
import { Link } from "react-router-dom";

//Images
import name from "../img/name-or.svg";
import left from "../img/left-bl.svg";
import instagram from "../img/instagram.svg";
import email from "../img/email.svg";
import lines from "../img/lines.svg";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { contact } from "../animations";

const Contact = () => {
  return (
    <StyledContainer
      exit="exit"
      animate="show"
      initial="hidden"
      variants={contact}
    >
      <div className="logo">
        <Link to="/">
          <img src={name} alt="" />
        </Link>
        <ul>
          <li>Designer</li>
          <li>Developer</li>
          <li>Artist</li>
        </ul>
      </div>
      <img className="lines" src={lines} alt="" />
      <StyledDesign>
        <Link style={{ textDecoration: "none" }} to="/websites">
          <div className="circle">
            <div className="contact">
              <h1>contact</h1>
              <div className="social-media">
                <img src={instagram} alt="" />
                <img src={email} alt="" />
              </div>
            </div>
          </div>
        </Link>
      </StyledDesign>
      <div className="nav-arrows">
        <Link to="/art">
          <motion.img whileTap={{ scale: 1.2 }} src={left} alt="" />
        </Link>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding-bottom: 10vh;
  background: #393939;
  width: 100vw;
  overflow: hidden;
  background: #f2f2f2;
  color: #393939;

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
  .nav-arrows {
    position: fixed;
    bottom: 10vh;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    height: 10vh;
    /* background: gray; */

    img {
      margin: 0 1rem;
      /* background: blue; */
    }
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
  position: relative;
  /* background: gray; */
  height: 100%;

  .circle {
    cursor: pointer;
    margin: 0 auto;
    height: 90vw;
    width: 90vw;
    max-width: 30rem;
    max-height: 30rem;
    background: #5aa0c8;
    border: 2.5rem #cc800e solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact {
    .social-media {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  h1 {
    color: #f2f2f2;
    font-size: 4.8rem;
  }
`;

export default Contact;
