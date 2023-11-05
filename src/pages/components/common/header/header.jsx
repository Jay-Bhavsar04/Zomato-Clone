import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon cur-po"></i>
              <div>Bengaluru</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center cur-po"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search search-icon"></i>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=arounds7C100%3A100&crop=100%3A100%38%2A%2C%2A"
            alt="Profile-Image"
            className="header-profile-image"
          />
          <span className="header-username">Jay</span>
          <i className="fi fi-rr-angle-small-down cur-po absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
