import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <li className={active ? "active" : " "}>{item}</li>
      </Link>
    </div>
  );
};

export default NavItem;
