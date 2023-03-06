import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ label, customClass, ...otherProps }) => (
  <div className={customClass ? "row btn-padding" : "row"}>
    <button>{label}</button>
  </div>
);

export default CustomButton;
