import React from "react";
import { connect } from "react-redux";

import { buyItem } from "../actions";

const AdditionalFeature = props => {
  const buyItem = () => {
    if (!props.car.features.includes(props.feature)) {
      props.buyItem(props.feature);
    }
  };

  console.log(props);
  return (
    <li className={props.car.features.includes(props.feature) ? "added" : ""}>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buyItem} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
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
