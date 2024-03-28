import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ChipsList from "../../components/chips-list/chips-list.components";
import "./restaurant-details.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import Dropdown from "../../components/form-input/dropdown.component";
import Modal from "../../components/modal/modal.component";
import MenuCard from "../../components/menu-card/menu-card.component";

const RestaurantDetails = () => {
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState([
    "Soups",
    "Starters",
    "Chinese",
    "Sizzlers",
    "Continental",
  ]);
  const [menu, setMenu] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  useEffect(() => {
    console.log(menu);
    console.log(modal);
  }, [menu, modal]);

  const menuCategoriesList = ["ALL", ...categories];

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
      case "categoryInput":
        setCategoryInput(value);
        break;
      default:
        break;
    }
  };

  const addNewCategory = () => {
    setCategories((prev)=> [...prev, categoryInput])
    setCategoryInput("")
    setModal(false)
  }

  const openCategoryModal = (event) => {
    console.log("openCategoryModal");
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
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

  const removeChips = (categoryName) => {
    const index = categories.indexOf(categoryName)
    const newCategories = [...categories]
    newCategories.splice(index, 1)
    setCategories(newCategories)
    console.log("Removing", categoryName)
  }

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
        <ChipsList categories={categories} removeChips={removeChips}></ChipsList>
        <div className="add-btn" onClick={openCategoryModal}>
          <FontAwesomeIcon icon="fa-solid fa-plus" /> Add Category
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
            {menuCategoriesList.map((list) => {
              return (
                <>
                  <li key={list}>{list}</li>
                </>
              );
            })}
          </ul>
        </div>
        <MenuCard menuItems={menu} />
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <FormInput
          name="categoryInput"
          type="text"
          label="Category Name"
          value={categoryInput}
          handleChange={handleChange}
          placeholder="Enter name of Category"
        />
        <div className="add-btn" onClick={addNewCategory}>
          <FontAwesomeIcon icon="fa-solid fa-plus" /> Add Category
        </div>
      </Modal>
    </div>
  );
};

export default RestaurantDetails;
