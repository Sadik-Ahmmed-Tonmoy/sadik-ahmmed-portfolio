"use client";

import { Link, animateScroll as scroll } from "react-scroll";

interface ScrollButtonProps {
  name?: string | React.ReactNode;
  to: string;
  children?: React.ReactNode;
  offset?: number;
  duration?: number;
  smooth?: boolean | string;
  spy?: boolean;
}

const ScrollButton = ({ name, to, children, offset = 50, duration = 500, smooth = true, spy = true }: ScrollButtonProps) => {
  return (
    <>
      <Link
        activeClass="active"
        to={to}
        spy={spy}
        smooth={smooth}
        offset={offset}
        duration={duration}
      >
        {name || children}
      </Link>
    </>
  );
};

export default ScrollButton;