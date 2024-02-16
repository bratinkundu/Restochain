import React from "react";
import "./accordion-item.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccordionItem = (active, ...props) => (
  <div className="rc-accordion-card">
    <div className="rc-accordion-header">
      <div
        className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
        onClick={() => handleToggle(id)}
      >
        <h5 className="rc-accordion-title">Soups</h5>
        <FontAwesomeIcon icon="fa-solid fa-angle-down" />
      </div>
    </div>
    <div
      ref={contentEl}
      className={`rc-collapse ${active === id ? "show" : ""}`}
      style={
        active === id
          ? { height: contentEl.current.scrollHeight }
          : { height: "0px" }
      }
    >
      <div className="rc-accordion-body">
        <p className="mb-0">Soups List here</p>
      </div>
    </div>
  </div>
);

export default AccordionItem;
