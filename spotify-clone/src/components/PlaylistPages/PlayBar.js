import React from "react";
import ImgAssets from "../../assets/ImgAssets";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

import "./PlayBar.css";

function PlayBar() {
  return (
    <div className="playbarContainer">
      <div className="playbarSongInfo">
        <img src={ImgAssets.albumImgFutureSrc} alt="albumImg" />
        <div className="songInfoContainer">
          <h5 className="songInfoTitle">All These Things That I've Done</h5>
          <p className="songInfoBand">The Killers</p>
        </div>
        <FavoriteBorderIcon />
      </div>
      <div className="playbarControls">
        <div className="playBarActionsContainer">
          <ShuffleIcon className="playBarIcon" />
          <SkipPreviousIcon className="playBarIcon" />
          <PlayArrowIcon className="playBarIcon" />
          <SkipNextIcon className="playBarIcon" />
          <RepeatIcon className="playBarIcon" />
        </div>
        <div className="playBarTimeStampContainer">
          <p>1:23</p>
          <div className="playBarTimeStampTracker"></div>
          <p>4:56</p>
        </div>
      </div>
      <div className="playbarSettings">
        <QueueMusicIcon className="settingsIcon" />
        <ImportantDevicesIcon className="settingsIcon" />
        <VolumeUpIcon className="settingsIcon" />
        <div className="volumeBar"></div>
        <UnfoldMoreIcon className="settingsIcon" />
      </div>
    </div>
  );
}

export default PlayBar;
