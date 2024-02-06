import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";

const ReasonBox = ({ title, description }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const paragraphStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  return (
    <div className="reason-box">
      <h2>
        {title}
        <FiArrowDownCircle onClick={() => setIsVisible(!isVisible)} />{" "}
      </h2>

      <p style={isVisible ? null : paragraphStyles}>{description}</p>
    </div>
  );
};

export default ReasonBox;
