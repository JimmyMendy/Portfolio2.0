export const MobileMenuAnimation = {
  hidden: {
    opacity: 0,
    y: 972
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
}

export const headerAnimation = {
  iniial: {
    y: -180,
    opacity: 0,
  },
  animate: {
    y: 0,
    opaciy: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: .6
    }
  }
}

export const FadeIn = {
  initial: {
    y: 0,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
    },
  }
}

export const wordAnimation ={ }

export const letterAnimation = {
  initial: {
    y: 400
  },
  animate: {
    y:0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    }
  }
}

export const mobileMenuAnimation = {
  hidden: {
    opacity: 0,
    y: 972
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  }
}


// export const titleAnimation = {
//   hidden: {y:200},
//   show: {
//     y:0,
//     transition: {duration: 0.75, ease: "easeOut"}
//   }
// }

