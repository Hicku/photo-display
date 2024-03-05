import React from "react";
import Photo from "./Photo";

export default function Photos({ defaultImages }) {
  return (
    <div>
      {defaultImages.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </div>
  );
}
