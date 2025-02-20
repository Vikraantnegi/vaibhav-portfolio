import clsx from "clsx";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  title: string;
  className?: string;
  variant?: "outlined" | "text";
}

const Button = ({
  onClick,
  className = "",
  title = "",
  variant = "outlined",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center cursor-pointer transition-colors duration-300",
        {
          "bg-transparent hover:bg-black border border-black text-black hover:text-white h-10 px-3 md:px-4 rounded-sm text-xs md:text-sm w-full md:w-auto":
            variant === "outlined",
          "text-xl py-2 text-left hover:text-gray-600 w-full":
            variant === "text",
        },
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
