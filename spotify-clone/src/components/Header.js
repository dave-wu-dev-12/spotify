import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <img
          className="header_logo_image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png"
          alt="logo.png"
        />
        {/* desktop header */}
        <div className="header_actions">
          <p>Premium</p>
          <p>Support</p>
          <p>Download</p>
          <p className="action_seperator">|</p>
          <div className="action_profile_container">
            <AccountCircleIcon />
            <p>Profile</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        {/* desktop header */}

        {/* mobile header */}
        <div className="header_actions_mobile">
          <div className="action_profile_container">
            <AccountCircleIcon className="margin_right_qtr" />
            <MenuIcon />
          </div>
        </div>
        {/* mobile header */}
      </div>
    </div>
  );
}

export default Header;
