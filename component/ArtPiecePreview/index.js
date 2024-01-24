import Image from "next/image";
import React from "react";


export default function ArtPiecesPreview({image, title, artist, slug}) {
    return (
<div>
      <Image src={image} width={240} height={240} alt={title} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      {/* <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} /> */}
    </div>
    );
}