import React from "react";
import "./PlaylistLandingPage.css";
import PlayBar from "./PlayBar";
import Playlist from "./Playlist";

function PlaylistLandingPage() {
  return (
    <div className="songPlayerContainer">
      {/* music info section */}
      <Playlist />

      {/* playbar section */}
      <PlayBar />
    </div>
  );
}

export default PlaylistLandingPage;
