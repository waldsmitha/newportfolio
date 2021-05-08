import React, { useState } from "react";

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
import { contact, homeLogo, staggerRight } from "../animations";

const Contact = () => {
  const [toggle, setToggle] = useState(false);
  const toggleContact = () => {
    setToggle(!toggle);
  };

  return (
    <StyledContainer
      exit="exit"
      animate="show"
      initial="hidden"
      variants={contact}
    >
      <motion.div variants={homeLogo} className="logo">
        <Link to="/">
          <img src={name} alt="" />
        </Link>
        <ul>
          <motion.li variants={staggerRight}>Designer</motion.li>
          <motion.li variants={staggerRight}>Developer</motion.li>
          <motion.li variants={staggerRight}>Artist</motion.li>
        </ul>
      </motion.div>
      <motion.img
        onClick={toggleContact}
        className="lines"
        src={lines}
        alt=""
      />
      <StyledDesign>
        <motion.div className="circle">
          <div className="contact">
            <h1>contact</h1>
            <div className="social-media">
              <a
                href="https://www.instagram.com/austinwaldsmith/"
                target="_blank"
              >
                <div className="item">
                  <img src={instagram} alt="" />
                  <p>instagram: @austinwaldsmith</p>
                </div>
              </a>
              <a href="mailto:austin.waldsmith@gmail.com</div>">
                <div className="item">
                  <img src={email} alt="" />
                  <p>email: austin.waldsmith@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
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
  padding-top: 1rem;
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
    left: calc(2.5vw - 2rem);
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
    /* border-radius: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact {
    a {
      text-decoration: none;
    }
    .social-media {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .item {
      padding: 1rem 0;
      p {
        color: #f2f2f2;
        font-size: 1.8rem;
      }
    }
  }

  h1 {
    color: #f2f2f2;
    font-size: 4.8rem;
  }
`;

export default Contact;
