import React, { ReactElement } from "react";

interface Props {
  btnText: string;
  className?: string;
  isLoading?: boolean;
  type?: any;
  onClick?: any;
  disabled?: boolean;
}

function Button({
  btnText,
  className,
  isLoading,
  type = "submit",
  onClick,
  disabled = false,
}: Props): ReactElement {
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`flex items-center  justify-center w-full px-8 py-2 cursor-pointer  border border-transparent rounded-full shadow-sm md:mx-auto lg:mx-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className}`}
      >
        <div
          className={`${
            isLoading
              ? "w-4 h-4 mr-4 animate-spin rounded-full border-2 border-dashed border-white"
              : ""
          }`}
        ></div>
        <p className="">{btnText}</p>
      </button>
    </div>
  );
}

export default Button;
