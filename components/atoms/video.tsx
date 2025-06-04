"use client";

import React, { useState } from 'react';

interface LazyVimeoVideoProps {
  vimeoId: string;
  title: string;
  thumbnailUrl: string;
  aspectRatio?: string;
}

export function LazyVimeoVideo({
  vimeoId,
  title,
  thumbnailUrl,
  aspectRatio = "56.25%",
}: LazyVimeoVideoProps) {
  const [loaded, setLoaded] = useState(false);
  const vimeoEmbedUrl = `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&autoplay=1&loop=0&badge=0`;

  return (
    <div
      className="relative w-full h-0 overflow-hidden rounded-lg shadow-lg cursor-pointer"
      style={{ paddingBottom: aspectRatio }}
      onClick={() => !loaded && setLoaded(true)}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute z-10 p-4 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {loaded && (
        <iframe
          src={vimeoEmbedUrl}
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full"
          title={title}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}