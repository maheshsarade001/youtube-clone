import React, { useState, useEffect, useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { AiOutlineLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "../components/SuggestionVideoCard";
import { relatedVideoDetails, videoDetails } from "../utils/data";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideoDetails();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    // fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
    //   console.log(res, "Video Details");
    //   setVideo(res);
    //   setLoading(false);
    // });

    //
    setTimeout(() => {
      setVideo(videoDetails);
      console.log(videoDetails);
      setLoading(false);
    }, 3000);
  };
  const fetchRelatedVideoDetails = () => {
    setLoading(true);
    // fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
    //   console.log(res, "Related Video Details");
    //   setRelatedVideo(res);
    //   setLoading(false);
    // });

    //
    setTimeout(() => {
      setRelatedVideos(relatedVideoDetails);
      console.log(relatedVideoDetails);
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="flex justify-center flex-row h-[calc(100% - 56px)] bg-black">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100% - 350px)] xl-w-[calc(100% - 400px)] px-4 py-3 lg:py-6 overflow-y-auto ">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] -ml-4 lg:ml-0 -mr-4 lg:mr-0 ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    src={video?.author?.avatar[0]?.url}
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center ">
                  {video?.author?.title}{" "}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/50 text-xs ml-1" />
                  )}
                </div>
                <div className="text-white/70 text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/15 ml-4">
                <AiOutlineLike className="text-xl text-white mr-2" />
                <span>{`${abbreviateNumber(
                  video?.stats?.likes,
                  2
                )} Likes`}</span>
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/15 ml-4">
                <AiOutlineLike className="text-xl text-white mr-2" />
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Views`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
