import React from "react";
import SonicLoading from "../../assets/sonicLoading.gif";

function Loading() {
  return (
    <div className="loadingContainer">
      <img
        className="loadingSonic"
        src={SonicLoading}
        alt="Sonic loading gif"
      />
      <h1 className="loadingHeader">
        Please verify your email so you can log on!
      </h1>
    </div>
  );
}

export default Loading;
