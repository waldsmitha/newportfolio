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
  @media screen and (min-width: 768px) {
    display: none;
  }
  z-index: 10;

  .nav {
    clip-path: circle(0% at 0% 75%);
    background: #5aa0c8;
    position: fixed;
    top: 0%;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: 0.75s;
    /* padding-left: 5rem; */
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    list-style-type: none;

    li {
      font-size: 3rem;
      margin: 2rem 0;
      cursor: pointer;
      width: fit-content;
    }
  }
  .active {
    color: #cc800e;
  }
  .reveal-nav-menu {
    clip-path: circle(120% at 0% 50%);
  }

  .close-btn {
    z-index: 10;
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    color: #5aa0c8;
    clip-path: circle(100% at 0% 100%);
    cursor: pointer;
    transition: 0.5s;
    height: 20vh;
    width: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3rem;
      pointer-events: none;
    }
  }
  .close {
    clip-path: circle(0% at 50% 50%);
  }
`;

export default NavMobileMenu;
