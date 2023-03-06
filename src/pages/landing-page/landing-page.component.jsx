import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./landing-page.styles.scss";
import CardList from "../../components/card-list/card-list.component";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const restaurants = [
      {
        id: 1,
        name: "Modest Restaurant",
        city: "Kadi, Mehsana",
      },
    ];

    return (
      <div>
        <div className="background">
          <p className="welcome-text">Welcome User</p>
          <div className="box">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-plus" />{" "}
              <span>Add new Restaurant</span>
            </div>
          </div>
          <CardList restaurants={restaurants} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
