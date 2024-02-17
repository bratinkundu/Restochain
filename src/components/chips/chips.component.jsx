import React from "react";
import "./chips.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Chips = (props) => {
  const removeChips = () => {
    props.removeChips(props.name)
  };
  return (
    <>
      <div className="chip">
        <div className="chip-head">{props.name.charAt(0)}</div>
        <div className="chip-content">{props.name}</div>
        <div className="chip-close" onClick={removeChips}>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-xmark"
            className="chip-close-icon"
          />
        </div>
      </div>
    </>
  );
};

export default Chips;
