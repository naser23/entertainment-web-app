import React from "react";
import TrendingBar from "../../components/TrendingBar/TrendingBar";
import Recommended from "../../components/Recommended/Recommended";

function Home() {
  return (
    <>
      <main className="homeContainer">
        <TrendingBar />
        <Recommended />
      </main>
      ;
    </>
  );
}

export default Home;
