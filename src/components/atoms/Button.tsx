import React from "react";

const Button = ({ title, onClick, color }) => {
  return (
    <div
      className={`flex h-10 justify-center p-1 bg-${color}-400 rounded-sm cursor-pointer`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
