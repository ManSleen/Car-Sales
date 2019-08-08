import React from "react";
import { connect } from "react-redux";

import { buyItem } from "../actions";

const AdditionalFeature = ({ feature, car, buyItem }) => {
  const handleBuyItem = () => {
    if (!car.features.includes(feature)) {
      buyItem(feature);
    }
  };

  return (
    <li className={car.features.includes(feature) ? "added" : ""}>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleBuyItem} className="button">
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapStateToProps = state => ({
  car: state.car
});

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeature);
