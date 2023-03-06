import React from "react";
import "./chips.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chips = (props) => (
  <div className="chip">
    <div className="chip-head">{props.name.charAt(0)}</div>
    <div className="chip-content">{props.name}</div>
    <div className="chip-close">
      <FontAwesomeIcon
        icon="fa-solid fa-circle-xmark"
        className="chip-close-icon"
      />
    </div>
  </div>
);

export default Chips;
