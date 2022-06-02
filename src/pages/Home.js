import React from "react";
import TrendingBar from "../components/TrendingBar/TrendingBar";
import Recommended from "../components/Recommended";

function Home() {
  return (
    <>
      <main className="pageContainer">
        <TrendingBar />
        <Recommended />
      </main>
      ;
    </>
  );
}

export default Home;
