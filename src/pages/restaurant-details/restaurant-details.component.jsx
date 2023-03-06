import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChipsList from "../../components/chips-list/chips-list.components";
import "./restaurant-details.styles.scss";

class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = [
      "Soups",
      "Starters",
      "Chinese",
      "Sizzlers",
      "Continental",
    ];
    return (
      <div>
        <div className="bg">
          <div className="overlay-text">
            <h2 className="res-title">Modest Restaurant</h2>
            <h3 className="res-city">Kadi, Mehsana</h3>
            <button className="update-btn">Download QR Code</button>
          </div>
        </div>
        <div className="menu-div">Menu</div>
        <div className="categories">
          <ChipsList categories={categories}></ChipsList>
          <div className="add-btn">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
            Add Category
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantDetails;
