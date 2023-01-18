import "./OutlinedButton.css";
import { useState } from "react";

const OutlinedButton = ({
  backgroundColor,
  label,
  labelColor,
  isRounded,
  onClick,
  extraClasses,
}) => {
  const [hover, setHover] = useState("false");

  const normalStyle = {
    backgroundColor: backgroundColor,
    color: labelColor,
    border: `var(--borderWidth) solid ${labelColor}`,
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  const hoverStyle = {
    backgroundColor: labelColor,
    color: backgroundColor,
    border: `var(--borderWidth) solid ${backgroundColor}`,
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
  };

  return (
    <button
      className={`outlinedButton ${extraClasses}`}
      style={hover === "true" ? hoverStyle : normalStyle}
      onMouseEnter={() => setHover("true")}
      onMouseLeave={() => setHover("false")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OutlinedButton;
