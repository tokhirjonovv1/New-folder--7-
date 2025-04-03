import React from "react";
import "./navbar.scss";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

function navbar() {
  return (
    <div>
      <div className="nav_top">
        <div className="nav_top_left">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="">ShopNow</a>
        </div>
        <div className="nav_top_right">
          <select name="" id="">
            <option value="eng">English</option>
            <option value="uzb">Uzbekistan</option>
            <option value="rus">Russian</option>
          </select>
        </div>
      </div>
      <div className="wrapper">
        <div className="navbar">
          <div className="nav-logo">
            <h1>Exclusive</h1>
          </div>
          <div className="nav_list">
            <ul className="nav_link">
              <li><a href="">Home</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Sign Up</a></li>
            </ul>
          </div>
          <div className="nav_right">
            <div className="nav_right_input">
              <input type="text" placeholder="What are you looking for?" />
              <div>
              <CiSearch />
              </div>
            </div>
            <CiHeart />
            <FiShoppingCart />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default navbar;
