import React from "react";
import "./LandingPage.css";
import Header from "../components/Header";
import LatestTrends from "../components/LatestTrends";
import MakeTheMost from "../components/MakeTheMost";
import RecentlyPlayed from "../components/RecentlyPlayed";
import Footer from "../components/Footer";

function LandingPage({ loggedInUserName, userLogout }) {
  return (
    <div className="landingPage_container">
      {/* header */}
      <Header loggedInUserName={loggedInUserName} userLogout={userLogout} />
      {/* recently played */}
      <RecentlyPlayed />
      {/* latest trend */}
      <LatestTrends />
      {/* make the most */}
      <MakeTheMost />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
