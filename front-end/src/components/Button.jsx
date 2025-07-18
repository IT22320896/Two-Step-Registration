import React from "react";

export const Button = ({
  onClick,
  loading,
  disabled,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${className}`}
    >
      {loading ? "Submitting..." : children}
    </button>
  );
};
