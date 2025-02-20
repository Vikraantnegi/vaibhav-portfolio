import clsx from "clsx";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  title: string;
  className?: string;
}

const Button = ({ onClick, className = "", title = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center cursor-pointer bg-transparent hover:bg-black border border-black text-black hover:text-white h-10 px-4 rounded-sm text-sm transition-colors duration-300",
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
