import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";
const VideoPlayer = ({ playState, setPlayState }) => {
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  const player = useRef(null);
  return (
    <div
      ref={player}
      onClick={closePlayer}
      className={`video-player  ${playState ? "" : "hide"}`}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
