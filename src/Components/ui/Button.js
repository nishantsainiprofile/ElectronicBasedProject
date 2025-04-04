import React from "react";

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};
