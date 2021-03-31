import React from "react";
import "./LatestTrends.css";
import ImgAssets from "../assets/ImgAssets";

function LatestTrends() {
  return (
    <div className="contentOuterContainer">
      <div className="contentInnerContainer">
        <div className="latestTrendContainer">
          <h2 className="latestTrendingHeader">Your latest listening trends</h2>
          <div className="albumRow">
            <div className="albumContainer">
              <div className="albumInfo">
                <span className="albumInfoMiniHeader">Top artists</span>
                <h3 className="albumInfoMiniTitle">Kings of Leon</h3>
                <p className="albumInfoMiniPlayNow">Play Now</p>
              </div>
              <img src={ImgAssets.albumImgPrmreSrc} alt="album" />
            </div>
            <div className="albumContainer">
              <div className="albumInfo">
                <span className="albumInfoMiniHeader">Top Track</span>
                <h3 className="albumInfoMiniTitle">Baddies ONLY</h3>
                <p className="albumInfoMiniPlayNow">Play Now</p>
              </div>
              <img src={ImgAssets.albumImgFutureSrc} alt="album" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestTrends;
