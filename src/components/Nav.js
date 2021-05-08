import { useEffect, useState } from "react";
//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";

//Router
import { useLocation } from "react-router-dom";

const Nav = ({ currentPage, pageNum, navActive, setNavActive }) => {
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const location = useLocation();

  const [navColor, setNavColor] = useState("gray content");

  useEffect(() => {
    if (location.pathname === "/art") {
      setNavColor("blue content");
    } else if (location.pathname === "/contact") {
      setNavColor("white content");
    } else {
      setNavColor("gray content");
    }
  }, [location]);

  return (
    <StyledContainer>
      <div className={navColor}>
        <div className="burger" onClick={toggleNav}>
          <span></span>
          <span></span>
        </div>
        <h1>{currentPage}</h1>
        <div className="page-num">
          <span>{pageNum}</span>/4
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  width: 100vw;
  position: fixed;
  bottom: 0;
  width: 95vw;
  left: 2.5%;
  .gray {
    /* background: #393939; */
  }
  .blue {
    /* background: #5aa0c8; */
  }
  .white {
    /* background: #f2f2f2; */
    h1 {
      color: #393939;
    }
    .page-num {
      color: #393939;
    }
  }
  .burger {
    cursor: pointer;
    span {
      display: block;
      padding: 0.1rem 3rem;
      border-radius: 1rem;
      margin: 1rem 0;
      background: #cc800e;
    }
  }
  .content {
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #cc800e;
  }
  h1 {
    font-size: 1.8rem;
  }
  .page-num {
    font-size: 3.6rem;
    span {
      color: #cc800e;
      font-size: 4.8rem;
    }
  }

  @media screen and (min-width: 768px) {
    .burger {
      display: none;
    }
  }
`;

export default Nav;
