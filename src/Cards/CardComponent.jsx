import React from "react";
import "../Styles/CardComponent.css";
import img from "../assets/images.png";
const CardComponent = () => {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div className="main-card">
      <div className="card">
        <img src={img} alt="Card" className="card-image" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            This is a quick example of a card using custom CSS for layout and
            design.
          </p>
          <button onClick={handleClick} className="card-button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
