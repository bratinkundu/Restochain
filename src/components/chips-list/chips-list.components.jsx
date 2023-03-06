import React from "react";
import Chips from "../chips/chips.component";
import "./chips-list.styles.scss";

const ChipsList = (props) => (
  <div className="chips-list">
    {props.categories.map((r) => (
      <Chips key={r.id} name={r}></Chips>
    ))}
  </div>
);

export default ChipsList;
