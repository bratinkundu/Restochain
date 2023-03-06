import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.scss";

const CardList = (props) => (
  <div className="card-list">
    {props.restaurants.map((r) => (
      <Card key={r.id} restaurant={r}></Card>
    ))}
  </div>
);

export default CardList;
