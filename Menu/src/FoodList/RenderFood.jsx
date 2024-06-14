import PropTypes from "prop-types";
import React, { Component } from "react";

class RenderFood extends Component {
  render() {
    let { FoodImage, FoodName, FoodDiscription, FoodPrice } = this.props.Dataaa;
    return (
      <div className="inner">
        <img className="imgs" src={FoodImage} alt="" />

        <h1>{FoodName}</h1>
        <div className="Discription">
          <span>This is list of data arrangr </span>
          <p>{FoodDiscription}</p>
        </div>

        <div className="price">{FoodPrice}</div>
      </div>
    );
  }
}
export default RenderFood;
