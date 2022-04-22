import React from "react";

function MediaItem({ item }) {
  console.log(item);
  return (
    <div className="item" key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default MediaItem;
