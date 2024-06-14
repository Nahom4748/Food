import React, { Component } from "react";
import "../components/style.css";
import FoodList from "./FoodList";
import RenderFood from "./RenderFood";
import img from "../img/Burger.png";

class Foods extends Component {
  render() {
    console.log(img);
    return (
      <div>
        <div className="title">Restaurant Menu </div>
        <div className="outer">
          {FoodList.map((element, i) => {
            console.log(element);
            return <RenderFood Dataaa={element} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
export default Foods;
