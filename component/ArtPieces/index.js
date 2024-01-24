import Link from "next/link";
import React from "react";
import Image from "next/image";
import ArtPiecesPreview from "../ArtPiecePreview";

export default function ArtPieces({pieces}) {
    console.log ("pieces", pieces)
    return (
        
        <div>
            {pieces.map((piece) => (
                <li key={piece.slug}>
                <ArtPiecesPreview
                  image={piece.imageSource}
                  title={piece.name}
                  artist={piece.artist}
                  slug={piece.slug}
                />
              </li>
           ))}
        </div>
    );
    
}

