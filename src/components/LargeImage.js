import React, { useState } from "react";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const LargeImage = ({ generate, imageComponent, setImageComponent, image }) => {
  const toggleImageComponent = () => {
    setImageComponent(!imageComponent);
  };

  return (
    <>
      {generate && (
        <StyledContainer onClick={toggleImageComponent}>
          <div className="image-container">
            <img src={image} alt="" />
          </div>
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled(motion.div)`
  background: red;
  /* width: 100vw;
  height: 100vh; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  image-container {
    height: 80vh;
    width: 90vw;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export default LargeImage;
