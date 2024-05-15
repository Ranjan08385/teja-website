import React from "react";
import Popup from "reactjs-popup";
import ReactPlayer from "react-player";
import "../styles/home_page.css";

const VideoPlayer = ({ showPopup, onClosePopup }) => {
  return (
    <div className="videoPlayer">
      <Popup
        contentStyle={{
          backgroundColor: "transparent",
          border: "none",
        }}
        open={showPopup}
        onClose={onClosePopup}
        position="center"
        modal={true}
      >
        <div className="videoPlayer__style">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            controls={true}
          />
        </div>
      </Popup>
    </div>
  );
};

export default VideoPlayer;
