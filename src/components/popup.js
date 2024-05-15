import React from "react";
import "../styles/popup.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaRegWindowClose } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { DiPhotoshop } from "react-icons/di";

export const ReactPopup = ({ project, showPopup, onClosePopup }) => {
  return (
    <div className="popup">
      <Popup
        contentStyle={{
          backgroundColor: "#252525",
          borderRadius: "20px",
          border: "none",
        }}
        open={showPopup}
        onClose={onClosePopup}
        position="center"
        modal={true}
      >
        <div className="popup__main">
          <div className="popup__head">{project.name}</div>
          <div className="popup__closeIcon" onClick={onClosePopup}>
            <FaRegWindowClose size={40} />
          </div>
        </div>

        <div className="popup__content">
          <div className="popup__info">
            <GoProjectRoadmap size={30} />
            <p className="popup__items">
              Project : <span>Test</span>
            </p>
          </div>
          <div className="popup__info">
            <DiPhotoshop size={30} />
            <p className="popup__items">
              Tools Used : <span>Adobe PhotoShop</span>
            </p>
          </div>
        </div>

        <div className="popup__preview">
          <img width={"100%"} height={500} src={project.url} alt="" />
        </div>
      </Popup>
    </div>
  );
};
