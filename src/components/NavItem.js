import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const NavItem = ({ item, navActive, setNavActive, index }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  let pathname = location.pathname;
  let newPages = ["/", "/websites", "/art", "/contact"];

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    if (pathname === newPages[index]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  const pageIndex = () => {
    switch (index) {
      case 0:
        return "/";
        break;
      case 1:
        return "/websites";
        break;
      case 2:
        return "/art";
        break;
      case 3:
        return "/contact";
        break;
      default:
        return "/";
    }
  };

  return (
    <div>
      <Link
        to={pageIndex}
        style={{ textDecoration: "none", color: "#f2f2f2" }}
        key={item}
        onClick={toggleNav}
      >
        <StyledLi className={active ? "active" : " "}>{item}</StyledLi>
      </Link>
    </div>
  );
};

const StyledLi = styled(motion.li)`
  transition: 0.3s;
  &:hover {
    color: #cc800e;
    transform: scale(1.1);
  }

  .active {
    color: #cc800e;
  }
`;
export default NavItem;
