import React from "react";
import "./menu-card.styles.scss";
import logo from "../../assets/menu-placeholder.png";

const MenuCard = ({ menuItems }) => {
  return (
    <div className="parent-row">
      {menuItems.map((item, index) => (
        <div className="col-sm-12 col-lg-4 col-md-4" key={index}>
          <div className="card-menu">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">{item.description}</p>
                <i>Price: ₹ {item.price}</i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
