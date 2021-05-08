//Home Page
export const home = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.5,
    },
  },
};

export const homeCircle = {
  hidden: {
    opacity: 0,
    scale: 2,
    y: "50%",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: "0%",
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    scale: 2,
    y: "50%",
    transition: {
      duration: 0.5,
    },
  },
};

export const homeLogo = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.5,
    },
  },
};

export const homeHand = {
  hidden: {
    x: "100%",
  },
  show: {
    x: "0%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerRight = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.25,
      duration: 0.25,
    },
  },
};

//Websites
export const websites = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const scaleDown = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
  hover: {
    scale: 1.1,
  },
};
export const scrollDown = {
  hidden: {
    y: "-120%",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: "0%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: "-120%",
    transition: {
      duration: 0.25,
    },
  },
};

export const expandCircle = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: "0%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "100%",
    y: "-100%",
    transition: {
      duration: 0.25,
    },
  },
};

//Art
export const art = {
  hidden: {
    opacity: 0,
    // x: "50%",
  },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerImage = {
  hidden: {
    opacity: 0,
    y: "50%",
  },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.25,
      duration: 0.25,
    },
  },
};

//Contact
export const contact = {
  hidden: {
    opacity: 0,
    x: "50%",
  },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
