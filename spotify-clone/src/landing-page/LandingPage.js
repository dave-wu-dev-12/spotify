import React from "react";
import "./LandingPage.css";
import Header from "../components/Header";
import LatestTrends from "../components/LatestTrends";
import MakeTheMost from "../components/MakeTheMost";
import RecentlyPlayed from "../components/RecentlyPlayed";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* recently played */}
      <LatestTrends />
      {/* latest trend */}
      <MakeTheMost />
      {/* make the most */}
      <RecentlyPlayed />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
