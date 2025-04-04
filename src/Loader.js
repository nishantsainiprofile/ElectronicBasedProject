import React, { useState, useEffect } from "react";

const Loader = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
