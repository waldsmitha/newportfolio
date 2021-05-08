import React, { useEffect, useState } from "react";

//Router
import { useLocation } from "react-router-dom";

//Components
import NavItem from "./NavItem";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";

//Images
import name from "../img/name-sm-bl.svg";

const NavDesktop = ({ pages, navActive, setNavActive }) => {
  const location = useLocation();
  const [navColor, setNavColor] = useState("gray content");

  useEffect(() => {
    if (location.pathname === "/contact") {
      setNavColor("white nav");
    } else {
      setNavColor("nav");
    }
  }, [location]);

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
      {/* <img src={name} alt="" /> */}
      <div className={navColor}>
        <ul>{listItems}</ul>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  min-height: 8vh;
  width: 95vw;
  left: 2.5%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #cc800e;
  transition: 0.5s;

  .white {
    li {
      color: #393939;
    }
    .active {
      color: #cc800e;
    }
  }

  .nav {
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      height: 100%;
    }

    li {
      font-size: 1.8rem;
      padding-left: 4rem;
    }
  }
  .active {
    color: #cc800e;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default NavDesktop;
