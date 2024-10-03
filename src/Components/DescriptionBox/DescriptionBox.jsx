import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Product Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, quod.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
