import { Component } from "react";
import { FiMenu } from "react-icons/fi";

import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header-con">
        <div className="logo-con">
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1694494814/shopify-bag_jxmafi.png"
            alt="shopify"
          />
          <h1>shopify</h1>
        </div>
        <div className="hand-menu">
          <u>start free trail</u>
          <FiMenu />
        </div>
        <div className="list-options">
          <>
            <select>
              <option>Solutions</option>
              <option>how to solve</option>
              <option>resolve</option>
            </select>
            <select>
              <option>Pricing</option>
              <option>how to solve</option>
              <option>resolve</option>
            </select>
            <select>
              <option>Resources</option>
              <option>how to solve</option>
              <option>resolve</option>
            </select>
          </>
          <div className="btn-con">
            <button type="button" className="login-btn">
              Login
            </button>
            <button type="button" className="start-free-btn">
              start free trail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
