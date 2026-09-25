import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const offsets = {
  top: { y: -24 },
  right: { x: 32 },
  none: {},
};

function Entrance({
  as = "div",
  children,
  className = "",
  delay = 0,
  desktopOnly = false,
  duration = 0.55,
  from = "top",
  mobileDelay = delay,
  mobileFrom = from,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.matchMedia("(min-width: 768px)").matches,
  );
  const shouldAnimate =
    !prefersReducedMotion && (!desktopOnly || isDesktop);
  const activeFrom = isDesktop ? from : mobileFrom;
  const activeDelay = isDesktop ? delay : mobileDelay;
  const MotionElement = motion[as];

  return (
    <MotionElement
      animate={{ opacity: 1, x: 0, y: 0 }}
      className={className}
      initial={shouldAnimate ? { opacity: 0, ...offsets[activeFrom] } : false}
      transition={{
        delay: activeDelay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

export default Entrance;
