import "./ClassicButton.css";
import { useState } from "react";

const ClassicButton = ({
  backgroundColor,
  label,
  labelColor,
  isRounded,
  onClick,
  hoverColor = "white",
  hoverBackground = "black",
  extraClasses,
}) => {
  const [hover, setHover] = useState("false");

  const normalStyle = {
    backgroundColor: "black",
    color: "red",
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
    // marginLeft: "1rem",
    // marginRight: "1rem",
  };

  const hoverStyle = {
    backgroundColor: "gray",
    color: "blue",
    borderRadius: isRounded === "true" ? "var(--borderRadius)" : 0,
    // marginLeft: "1rem",
    // marginRight: "1rem",
  };

  return (
    <button
      className={`classicButton ${extraClasses}`}
      style={hover === "true" ? hoverStyle : normalStyle}
      onMouseEnter={() => setHover("true")}
      onMouseLeave={() => setHover("false")}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ClassicButton;
