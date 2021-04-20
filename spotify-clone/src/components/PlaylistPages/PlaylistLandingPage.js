import React from "react";
import "./PlaylistLandingPage.css";
import PlayBar from "./PlayBar";
import Playlist from "./Playlist";

function PlaylistLandingPage({ loggedInUserName, userLogout }) {
  return (
    <div className="songPlayerContainer">
      {/* music info section */}
      <Playlist loggedInUserName={loggedInUserName} userLogout={userLogout} />

      {/* playbar section */}
      <PlayBar />
    </div>
  );
}

export default PlaylistLandingPage;
