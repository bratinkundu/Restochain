import React, { useState } from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="row">
    {label ? <label>{label}</label> : null}
    <input onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
