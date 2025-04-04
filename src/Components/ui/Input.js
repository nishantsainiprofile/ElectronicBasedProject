import React from "react";

export const Input = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded-lg w-full ${className}`}
    />
  );
};
