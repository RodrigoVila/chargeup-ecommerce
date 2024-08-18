import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import "./AnimatedBorderBottom.css";

type AnimatedBorderBottom = {
  children: ReactNode;
  className?: string;
};

export const AnimatedBorderBottom = ({
  children,
  className,
}: AnimatedBorderBottom) => {
  return (
    <div className={twMerge("hover-border mx-1", className)}>{children}</div>
  );
};
