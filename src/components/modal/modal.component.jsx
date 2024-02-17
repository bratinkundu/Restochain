import React from "react";
import "./modal.styles.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const handleModalClose = (event) => {
    //event.preventDefault();
    onClose();
    console.log("Calling modal close", isOpen)
  };

  console.log(isOpen);

  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-button" onClick={handleModalClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
