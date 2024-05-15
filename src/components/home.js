import React from "react";
import "../styles/home_page.css";
import VideoPlayer from "./video_player";
import { useState } from "react";
import resume from "../assets/pdf/resume.pdf";

function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    // setShowVideo(true);

    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="home__about">
      {showVideo ? (
        <VideoPlayer showPopup={showVideo} onClosePopup={closeVideo} />
      ) : (
        <div></div>
      )}
      <h1># I am Teja Moger.</h1>
      <h2>Video Editor</h2>
      <p>
        I have good knowledge in video production with entry level work
        experience. Specialising in video editing, Adobe Premiere, After Effects
        and Photoshop. I am good at working with different teams to get video
        projects done.
      </p>

      <div className="home_aboutBtn" onClick={playVideo}>
        My Resume
      </div>
    </div>
  );
}

export default Home;
