import React from "react";
import "./form-input.styles.scss";

const Dropdown = ({ handleChange, options, label, ...otherProps }) => (
  <div className="row">
    {label ? <label>{label}</label> : null}
    <select onChange={handleChange} {...otherProps}>
      <option value="" defaultValue></option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
