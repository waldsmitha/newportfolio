import React from "react";

//Styling & Animations
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  //animations

  return (
    <motion.svg
      width="100vw"
      height="100vh"
      viewBox="0 0 375 578"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="circles">
        <g id="big-bl-2" filter="url(#filter0_f)">
          <motion.circle
            cx="67.7646"
            cy="503.556"
            r="69.6718"
            fill="#5AA0C8"
            fillOpacity="0.1"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </g>
        <g id="big-bl-1" filter="url(#filter1_f)">
          <motion.circle
            cx="307.236"
            cy="69.6718"
            r="69.6718"
            fill="#5AA0C8"
            fillOpacity="0.1"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </g>
        <g id="white" filter="url(#filter2_f)">
          <motion.circle
            cx="50.2422"
            cy="160.621"
            r="45.4744"
            fill="#F2F2F2"
            fillOpacity="0.1"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 0.9, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </g>
        <g id="orange" filter="url(#filter3_f)">
          <motion.circle
            cx="254.669"
            cy="433.467"
            r="28.7866"
            fill="#CC800E"
            fillOpacity="0.1"
            initial={{ scale: 1 }}
            animate={{ scale: [0.8, 1.05, 0.8] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </g>
        <g id="sm-bl" filter="url(#filter4_f)">
          <motion.circle
            cx="175.401"
            cy="228.206"
            r="13.7675"
            fill="#5AA0C8"
            fillOpacity="0.1"
            initial={{ scale: 1 }}
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-5.90723"
          y="429.884"
          width="147.344"
          height="147.344"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter1_f"
          x="233.564"
          y="-4"
          width="147.344"
          height="147.344"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter2_f"
          x="0.767822"
          y="111.146"
          width="98.9488"
          height="98.9488"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter3_f"
          x="221.882"
          y="400.681"
          width="65.5731"
          height="65.5731"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter4_f"
          x="157.634"
          y="210.439"
          width="35.535"
          height="35.535"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default BackgroundCircles;
