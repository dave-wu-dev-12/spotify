import React from "react";
import "./RecentlyPlayed.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import ImgAssets from "../assets/ImgAssets";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

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
              <span className="albumOverlay">
                <PlayCircleOutlineIcon />
                <span className="albumOverlay_artistName">FUTURE</span>
                <span className="albumOverlay_title">WIZRUD</span>
              </span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgGeazySrc} alt="album" />
              <span className="albumOverlay">
                <PlayCircleOutlineIcon />
                <span className="albumOverlay_artistName">G-EAZY</span>
                <span className="albumOverlay_title">TGIF</span>
              </span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgPrmreSrc} alt="album" />
              <span className="albumOverlay">
                <PlayCircleOutlineIcon />
                <span className="albumOverlay_artistName">PARAMORE</span>
                <span className="albumOverlay_title">rockCity</span>
              </span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgSelenagSrc} alt="album" />
              <span className="albumOverlay">
                <PlayCircleOutlineIcon />
                <span className="albumOverlay_artistName">SELENA GOMER</span>
                <span className="albumOverlay_title">My Bieber</span>
              </span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgZeddSrc} alt="album" />
              <span className="albumOverlay">
                <PlayCircleOutlineIcon />
                <span className="albumOverlay_artistName">ZEDD</span>
                <span className="albumOverlay_title">
                  Clarity of the Darkest night in the land of darksied the one
                  ruler
                </span>
              </span>
            </div>
            <div className="playlistAlbumContainer">
              <img src={ImgAssets.albumImgWeekndSrc} alt="album" />
              <span className="albumOverlay">
                <PlayCircleOutlineIcon />
                <span className="albumOverlay_artistName">THE WEEKND</span>
                <span className="albumOverlay_title">TA hours</span>
              </span>
            </div>
          </div>
        </div>
        <div className="recentlyPlayed_nextContianer">
          <ArrowDropDownCircleIcon className="hoverInfinite" />
        </div>
      </div>
      <div className="banner__fade"></div>
    </div>
  );
}

export default RecentlyPlayed;
