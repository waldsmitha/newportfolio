import React, { useState } from "react";

//Router
import { Link } from "react-router-dom";

//Components
import NavItem from "./NavItem";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const NavMobileMenu = ({ pages, navActive, setNavActive }) => {
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  let listItems = pages.map((item, i) => (
    <NavItem
      item={item}
      navActive={navActive}
      setNavActive={setNavActive}
      index={i}
      key={item}
    />
  ));

  return (
    <StyledContainer>
      <div className={navActive ? "nav reveal-nav-menu" : "nav"}>
        <ul>{listItems}</ul>
      </div>
      <div
        className={navActive ? "close-btn" : "close-btn  close"}
        onClick={toggleNav}
      >
        <h1>Close</h1>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  .nav {
    clip-path: circle(0% at 0% 75%);
    background: #5aa0c8;
    position: fixed;
    top: 0%;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 0.5s;
    padding-left: 5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    height: 100%;
    list-style-type: none;

    li {
      font-size: 3rem;
      margin: 2rem 0;
      cursor: pointer;
    }
  }
  .active {
    color: #cc800e;
  }
  .reveal-nav-menu {
    clip-path: circle(100% at 0% 50%);
  }

  .close-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 25%;
    background: white;
    color: #5aa0c8;
    clip-path: circle(40% at 0% 100%);
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    transition: 0.25s;

    h1 {
      padding: 5rem;
      font-size: 3rem;
      pointer-events: none;
    }
  }
  .close {
    clip-path: circle(0% at 50% 50%);
  }
`;

export default NavMobileMenu;
