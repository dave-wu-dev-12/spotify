import React from "react";
import "./MakeTheMost.css";

function MakeTheMost() {
  return (
    <div className="makeTheMost_Container">
      <div className="makeTheMost_ContentContainer">
        <h1 className="makeTheMost_Header">Make the most of Spotify</h1>
        <div className="makeTheMost_DetailTextContainer">
          <div className="makeTheMost_DetailText">
            <h4>Manage your account</h4>
            <p>
              Edit your profile, change your password, and update your payment
              information.
            </p>
            <p className="makeTheMost_actionText">Manage Account</p>
          </div>
          <div className="makeTheMost_DetailText">
            <h4>Get our free app</h4>
            <p>
              Seamlessly listen to music you love. Download the Spotify app for
              your computer.
            </p>
            <p className="makeTheMost_actionText">Download Desktop App</p>
          </div>
          <div className="makeTheMost_DetailText">
            <h4>Listen on the web</h4>
            <p>
              To play and share music without the app, all within your browser,
              go to play.spotify.com.
            </p>
            <p className="makeTheMost_actionText">Open Web Player</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeTheMost;
