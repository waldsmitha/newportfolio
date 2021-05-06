import { useEffect, useState } from "react";
//Pages
import Home from "./pages/Home";
import Websites from "./pages/Websites";
import Art from "./pages/Art";
import Contact from "./pages/Contact";

//Components
import Nav from "./components/Nav";
import NavMobileMenu from "./components/NavMobileMenu";

//styling
import GlobalStyles from "./components/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";

//Router
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [pages, setPages] = useState(["home", "websites", "art", "contact"]);
  const [currentPage, setCurrentPage] = useState("home");
  const [pageNum, setPageNum] = useState(1);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    let page;
    location.pathname.split("/")[1]
      ? (page = location.pathname.split("/")[1])
      : (page = location.pathname);
    if (page === "/") {
      page = "home";
    }
    let index = pages.indexOf(page);
    setPageNum(index + 1);

    setCurrentPage(page);
  }, [location.pathname]);

  return (
    <StyledContainer>
      <GlobalStyles></GlobalStyles>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path="/websites">
            <Websites />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Nav
          currentPage={currentPage}
          pageNum={pageNum}
          navActive={navActive}
          setNavActive={setNavActive}
        />
      </AnimatePresence>

      <NavMobileMenu
        currentPage={currentPage}
        pages={pages}
        setPages={setPages}
        navActive={navActive}
        setNavActive={setNavActive}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)``;

export default App;
