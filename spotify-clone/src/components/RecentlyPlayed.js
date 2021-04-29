import React from "react";
import "./RecentlyPlayed.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import ImgAssets from "../assets/ImgAssets";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function RecentlyPlayed() {
  const userRecentlyPlayedList = useSelector((state) => state.recentlyPlayed);

  // Generate the view
  let recentlyplayedAlbumHandle = null;
  recentlyplayedAlbumHandle = userRecentlyPlayedList.map((item) => {
    return (
      <div className="playlistAlbumContainer">
        <img src={item.imgSrc} alt="album" />
        <span className="albumOverlay">
          <PlayCircleOutlineIcon />
          <span className="albumOverlay_artistName">{item.title}}</span>
          <span className="albumOverlay_title">{item.title}</span>
        </span>
      </div>
    );
  });

  console.log(userRecentlyPlayedList);

  return (
    <div className="recentlyPlayed_outerContainer">
      <div className="recentlyPlayed_contentContainer">
        <div className="recentlyPlayed_playerContainer">
          <div className="jumpBackIn_container">
            <p>Recently Played</p>
            <div className="jumpBackInContainer">
              <h1 className="jumpBackInText">Jump back in</h1>
              <div className="jumpBackInBottomBorder"></div>
            </div>
            <h5>Pick up your music right where you left off.</h5>
            <Link to={"/Playlist"}>
              <button className="webPlayer_button">Open Web player</button>
            </Link>
          </div>
          <div className="playlistGrid_Container">
            {recentlyplayedAlbumHandle}
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
