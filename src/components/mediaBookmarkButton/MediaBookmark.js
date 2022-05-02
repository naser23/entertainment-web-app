import React from "react";
import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../../assets/icon-bookmark-full.svg";

function MediaBookmark() {
  return (
    <button className="mediaBookmarkButton">
      <img src={BookmarkIconEmpty} alt="Bookmark Icon" />
    </button>
  );
}

export default MediaBookmark;
