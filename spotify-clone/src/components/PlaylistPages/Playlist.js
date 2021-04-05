import React from "react";
import ImgAssets from "../../assets/ImgAssets";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Playlist.css";

function Playlist() {
  return (
    <div className="playlistContainer">
      {/* playlist info section */}
      <div className="playlistNavigationContainer">
        <div className="playlistControlsContainer">
          <img
            className="header_logo_image"
            src={ImgAssets.spotifyIcon}
            alt="sptofy"
          />
          <div className="playlistControlItem">
            <HomeIcon />
            <h3>Home</h3>
          </div>
          <div className="playlistControlItem">
            <SearchIcon />
            <h3>Search</h3>
          </div>
          <div className="playlistControlItem">
            <LibraryMusicIcon />
            <h3>Your Library</h3>
          </div>
          <div className="playlistControlItem">
            <AddBoxIcon />
            <h3>Create Playlist</h3>
          </div>
          <div className="playlistControlItem">
            <FavoriteIcon />
            <h3>Liked Songs</h3>
          </div>
        </div>
        <div className="playlistListContainer">
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
        </div>
      </div>
      {/* playlist viewer section */}
    </div>
  );
}

export default Playlist;
