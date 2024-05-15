import React from "react";
import "../styles/projects.css";
import { projectData } from "../utils/data";
import { useState } from "react";
import { ReactPopup } from "./popup";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState("all");
  const [selectedProject, setSelectedProject] = useState(projectData[0]);
  const [showPopup, setShowPopup] = useState(false);

  const onClickOption = (type) => {
    setSelectedIndex(type);
  };

  let checkSelected = (page) => {
    if (page === selectedIndex) {
      return "selected";
    }

    return "";
  };

  const ShowPopup = (project) => {
    console.log("Show Popup");
    setSelectedProject(project);
    setShowPopup(true);
  };

  const onClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="project">
      <div className="project__head">
        My <span>Projects</span>
      </div>
      <ReactPopup
        project={selectedProject}
        showPopup={showPopup}
        onClosePopup={onClosePopup}
      />
      <div className="project__type">
        <p
          className={checkSelected("all")}
          onClick={() => onClickOption("all")}
        >
          All
        </p>
        <p
          className={checkSelected("photo")}
          onClick={() => onClickOption("photo")}
        >
          Photo
        </p>
        <p
          className={checkSelected("video")}
          onClick={() => onClickOption("video")}
        >
          Video
        </p>
        <p
          className={checkSelected("animation")}
          onClick={() => onClickOption("animation")}
        >
          Animation
        </p>
      </div>

      <div className="project__details">
        {projectData.map((project) => (
          <div
            key={project.name}
            className="project__image"
            onClick={() => ShowPopup(project)}
          >
            <img src={project.url} width={380} height={250} alt="" />
            <div className="project__overlay">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
