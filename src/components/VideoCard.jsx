import React from "react";

import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { bsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "./VideoLength";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails?.[0]?.url}
            alt="Thumbnail"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;