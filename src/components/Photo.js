import React from "react";

export default function Photo({ photo }) {
  const imageUrl = photo.url
    ? photo.url
    : `https://picsum.photos/id/${photo.id}/200/300`;

  const author = photo.author ? photo.author : "Unknown Author";

  const altText = `Photo by ${author}`;

  return <div>{<img src={imageUrl} alt={altText}></img>}</div>;
}
