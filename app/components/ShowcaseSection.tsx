"use client";

import { getYoutubeEmbedUrl } from "@/utils/common";
import React, { useState } from "react";

const ShowcaseSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="showcase" className="py-6 w-full md:py-10">
      <div className="flex flex-col">
        <p className="text-3xl md:text-4xl font-bold text-center md:text-left">
          HIGHLIGHTS
        </p>
        <div className="bg-black mt-2 mb-6 h-0.5 rounded-sm" />

        <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100 relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-black" />
            </div>
          ) : null}
          <iframe
            src={getYoutubeEmbedUrl(
              "https://www.youtube.com/watch?v=LEzm6EzQHmQ"
            )}
            width="100%"
            height="100%"
            allow="autoplay"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
