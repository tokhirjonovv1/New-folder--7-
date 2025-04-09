import React from "react";
import "./cards.scss";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import images from "../../assets/index.js";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="product-card">
        <div style={{backgroundColor: "#f5f5f5"}}>
          <div className="discount-badge">-40%</div>
          <div className="card_about">
            <span>
              <CiHeart />
            </span>
            <span>
              <IoEyeOutline />
            </span>
          </div>
          <div className="product-image">
            {/* Replace with actual image */}
            <img src={images.gamepat} alt="" />
            <div className="addcards">
              <a>Add To Cart</a>
            </div>
          </div>
        </div>

        <div className="product-info">
          <h3 className="product-title">HAVIT HV-G92 Gamepad</h3>

          <div className="price-container">
            <span className="current-price">$120</span>
            <span className="original-price">$160</span>
          </div>

          <div className="rating">
            <div className="stars">★★★★★</div>
            <span className="review-count">(88)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
