import { React, useState } from "react";
import ImgAssets from "../../assets/ImgAssets";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Playlist.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function Playlist() {
  const [accountPopOut, setAccountPopOut] = useState(false);

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
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
          <p className="playListListItem">The Killers - Hot Fuss</p>
          <p className="playListListItem">
            Kings Of Leon - When You See Yourself
          </p>
          <p className="playListListItem">This is the MAN</p>
          <p className="playListListItem">The Lulabies - Hot Chess</p>
          <p className="playListListItem">Oassis - Wonderwall 10hr</p>
          <p className="playListListItem">hop hip - whast up</p>
          <p className="playListListItem">The Goodmorning - Bacon</p>
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
      <div className="playlistSongDisplayContainer">
        <div className="playlistSongHeader">
          <div className="playlistHistoryControlIconContainer">
            <KeyboardArrowLeftIcon />
            <KeyboardArrowRightIcon />
          </div>
          <div
            className="playlistUserInfoContainer"
            onClick={() => setAccountPopOut(!accountPopOut)}
          >
            <PermIdentityIcon />
            <h5 className="playlistUserName">DIRKY </h5>
            {accountPopOut ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
          {accountPopOut && (
            <div className="popoutPLaylistUserInfoContainer">
              <p className="accountItemInPopout">
                <span>Account</span>
                <ExitToAppIcon />
              </p>
              <p>Profile</p>
              <p>Logout</p>
            </div>
          )}
        </div>
        <div className="welcomeContainer"></div>
        <div className="playlistSongSectionContianer"></div>
      </div>
    </div>
  );
}

export default Playlist;
