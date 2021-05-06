import React from "react";

//Styling & Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Name = () => {
  let width = "35vw";
  return (
    <StyledContainer
      width="345"
      height={width}
      viewBox="0 0 345 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="name">
        <g id="a">
          <ellipse
            id="Ellipse 1"
            cx="60.3504"
            cy="60"
            rx="60.3504"
            ry="60"
            fill="#5AA0C8"
          />
          <rect
            id="Rectangle 1"
            x="91.532"
            y="60"
            width="29.1694"
            height="60"
            fill="#5AA0C8"
          />
          <ellipse
            id="Ellipse 2"
            cx="60.0995"
            cy="59.75"
            rx="28.9179"
            ry="28.75"
            fill="#393939"
          />
        </g>
        <g id="w">
          <path
            id="Ellipse 4"
            d="M254.979 60C254.979 75.913 248.621 91.1742 237.303 102.426C225.985 113.679 210.635 120 194.629 120C178.623 120 163.272 113.679 151.955 102.426C140.637 91.1742 134.278 75.913 134.278 60L194.629 60H254.979Z"
            fill="#5AA0C8"
          />
          <ellipse
            id="Ellipse 5"
            cx="194.883"
            cy="59.75"
            rx="28.9179"
            ry="28.75"
            fill="#393939"
          />
          <path
            id="Ellipse 6"
            d="M344.498 60C344.498 75.913 338.14 91.1742 326.822 102.426C315.504 113.679 300.153 120 284.148 120C268.142 120 252.791 113.679 241.473 102.426C230.155 91.1742 223.797 75.913 223.797 60L284.148 60H344.498Z"
            fill="#5AA0C8"
          />
          <ellipse
            id="Ellipse 7"
            cx="284.402"
            cy="59.75"
            rx="28.9179"
            ry="28.75"
            fill="#393939"
          />
          <rect
            id="Rectangle 2"
            x="134.278"
            width="31.684"
            height="60"
            fill="#5AA0C8"
          />
          <rect
            id="Rectangle 3"
            x="223.797"
            width="31.684"
            height="60"
            fill="#5AA0C8"
          />
          <rect
            id="Rectangle 4"
            x="313.3"
            width="31.2"
            height="60"
            fill="#5AA0C8"
          />
        </g>
      </g>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.svg)`
  background: blue;
  /* width: 100vw; */
`;

export default Name;
