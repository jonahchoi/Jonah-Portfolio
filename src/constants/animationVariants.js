const ContainerVariant = {
  initial: {},
  inView: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const DelayContainerVariant = {
  initial: {},
  inView: {
    transition: {
      delayChildren: 3,
      staggerChildren: 0.3,
    },
  },
};
const ChildrenVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      damping: 16,
    },
  },
};

module.exports = { ContainerVariant, DelayContainerVariant, ChildrenVariant };
