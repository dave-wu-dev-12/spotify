import React from "react";
import "./RecentlyPlayed.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import ImgAssets from "../assets/ImgAssets";

function RecentlyPlayed() {
  return (
    <div className="recentlyPlayed_outerContainer">
      <div className="recentlyPlayed_contentContainer">
        <div className="recentlyPlayed_playerContainer">
          <div className="jumpBackIn_container">
            <p>Recently Played</p>
            <h1>Jump back in</h1>
            <h5>Pick up your music right where you left off.</h5>
            <button className="webPlayer_button">Open Web player</button>
          </div>
          <div className="playlistGrid_Container">
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgFutureSrc} alt="album" />
              <span className="albumOverlay">FUTURE</span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgGeazySrc} alt="album" />
              <span className="albumOverlay">G-EAZY</span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgPrmreSrc} alt="album" />
              <span className="albumOverlay">PARAMORE</span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgSelenagSrc} alt="album" />
              <span className="albumOverlay">SELENA GOMER</span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgZeddSrc} alt="album" />
              <span className="albumOverlay">ZEDD</span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgWeekndSrc} alt="album" />
              <span className="albumOverlay">THE WEEKND</span>
            </div>
          </div>
        </div>
        <div className="recentlyPlayed_nextContianer">
          <ArrowDropDownCircleIcon />
        </div>
      </div>
      <div className="banner__fade"></div>
    </div>
  );
}

export default RecentlyPlayed;
