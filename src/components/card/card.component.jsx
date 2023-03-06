import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.scss";

const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://content.jdmagicbox.com/comp/mehsana/s3/9999p2762.2762.160629110736.j8s3/catalogue/modest-restaurant-kadi-mehsana-punjabi-delivery-restaurants-jtmne1hywg.jpg`}
    ></img>
    <h2 className="card-title">{props.restaurant.name}</h2>
    <p className="card-city">{props.restaurant.city}</p>
    <Link
      to="/restaurant/detail"
      className="card-btn"
      style={{ textDecoration: "none", textAlign: "center" }}
    >
      View Details
    </Link>
  </div>
);

export default Card;
