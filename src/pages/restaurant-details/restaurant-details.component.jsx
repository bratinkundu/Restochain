import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChipsList from "../../components/chips-list/chips-list.components";
import "./restaurant-details.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import Dropdown from "../../components/form-input/dropdown.component";
import Modal from "../../components/modal/modal.component";

const RestaurantDetails = () => {

  const [modal, setModal] = useState(false);
  const [categories] = useState(["Soups", "Starters", "Chinese", "Sizzlers", "Continental"]);
  const [menu, setMenu] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  useEffect(() => {
    console.log(menu)
    console.log(modal)
  }, [menu, modal])

  const menuCategoriesList = ['ALL',...categories ]

  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "itemName":
        setItemName(value);
        break;
      case "itemDescription":
        setItemDescription(value);
        break;
      case "itemPrice":
        setItemPrice(value);
        break;
      case "itemCategory":
        setItemCategory(value);
        break;
      default:
        break;
    }
  };

  const openCategoryModal = (event) => {
    event.preventDefault();
    setModal(true)
  };

  const handleCloseModal = () => {
    setModal(false)
    console.log("Closed modal", modal);
  };

  const addMenuItem = (event) => {
    event.preventDefault();

    const menuItem = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      category: itemCategory,
    };


    setMenu([...menu, menuItem]);
    setItemName("");
    setItemDescription("");
    setItemPrice("");
    setItemCategory("");
    console.log(menu);
  };

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
          <div className="add-btn" onClick={openCategoryModal}>
            <FontAwesomeIcon icon="fa-solid fa-plus" /> Add Category
            <Modal
              isOpen={modal}
              onClose={handleCloseModal}
            >
              <h2>This is sample modal popup</h2>
              <p>This is Modal Popup</p>
            </Modal>
          </div>
        </div>
        <div className="menu-add-list">
          <FormInput
            name="itemName"
            type="text"
            label="Dish Name"
            value={itemName}
            handleChange={handleChange}
            placeholder="Enter name of Dish"
          />
          <FormInput
            name="itemDescription"
            type="text"
            label="Description"
            value={itemDescription}
            handleChange={handleChange}
            placeholder="Description of the dish"
          />
          <FormInput
            name="itemPrice"
            type="text"
            label="Price"
            value={itemPrice}
            handleChange={handleChange}
            placeholder="Enter the price of the dish"
          />
          <Dropdown
            name="itemCategory"
            options={categories}
            value={itemCategory}
            label="Category"
            handleChange={handleChange}
        />
        </div>
        <div className="add-btn-div">
          <div className="add-btn" onClick={addMenuItem}>
            <FontAwesomeIcon icon="fa-solid fa-plus" /> Add New Dish
          </div>
        </div>
        <div className="mainContainer">
          <div className="menu">
            <ul>
              {menuCategoriesList.map(list => {
                return (
                  <><li key={list}>{list}</li></>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default RestaurantDetails;
