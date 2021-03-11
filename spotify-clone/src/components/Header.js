import React, { useState } from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [showPopInNav, setShowPopInNav] = useState(false);

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
          <div className="action_profile_container no_color_hover">
            <AccountCircleIcon className="margin_right_qtr color_hover" />
            <MenuIcon onClick={() => setShowPopInNav(true)} />
            {/* mobile pop in nav  */}
            {showPopInNav && (
              <div className="pop_in_container">
                <div className="pop_in_content_container">
                  <div className="pop_in_actionContainer">
                    <p>Premium</p>
                    <p>Support</p>
                    <p>Download</p>
                    <p className="horixontal_action_seperator no_color_hover">
                      --
                    </p>
                    <div className="pop_in_action_profile_container">
                      <p>Account</p>
                      <p>Log out</p>
                    </div>
                  </div>
                  <img
                    className="header_logo_image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png"
                    alt="logo.png"
                  />
                </div>
                <CloseIcon onClick={() => setShowPopInNav(false)} />
              </div>
            )}
            {/* mobile overlay for pop in nav  */}
            {showPopInNav && <div className="pop_in_overlay_container"></div>}
            {/* mobile overlay for pop in nav  */}

            {/* mobile pop in nav  */}
          </div>
        </div>
        {/* mobile header */}
      </div>
    </div>
  );
}

export default Header;
