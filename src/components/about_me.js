import React from "react";
import "../styles/about_me.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function AboutMe() {
  var age = new Date().getFullYear() - 1998;

  return (
    <div className="aboutMe">
      <div className="aboutMe__head">
        About <span className="aboutMe__headSub">Me</span>{" "}
      </div>

      <div className="aboutMe__section">
        <div className="aboutMe__personalInfo">
          <p className="aboutMe__heading">Personal Info</p>

          <div className="aboutMe__values">
            <p className="aboutMe__qun">First Name : </p>
            <p className="aboutMe__ans">Teja</p>
          </div>
          <div className="aboutMe__values">
            <p className="aboutMe__qun">Last Name : </p>
            <p className="aboutMe__ans">Moger</p>
          </div>
          <div className="aboutMe__values">
            <p className="aboutMe__qun">Age : </p>
            <p className="aboutMe__ans">{age} Years</p>
          </div>
          <div className="aboutMe__values">
            <p className="aboutMe__qun">Nationality : </p>
            <p className="aboutMe__ans">Indian</p>
          </div>
          <div className="aboutMe__values">
            <p className="aboutMe__qun">Mobile : </p>
            <p className="aboutMe__ans">+91 6360479118</p>
          </div>
          <div className="aboutMe__values">
            <p className="aboutMe__qun">Email Id : </p>
            <p className="aboutMe__ans">tezzumoger007@gmail.com</p>
          </div>
          <div className="aboutMe__values">
            <p className="aboutMe__qun">Language : </p>
            <p className="aboutMe__ans">Kannada, Hindi, English</p>
          </div>
        </div>

        <div className="aboutMe__skills">
          <p className="aboutMe__skillsHead">My Skills</p>
          <div className="aboutMe__skillsSection">
            <div className="aboutMe__percentIndicator">
              <CircularProgressbar
                value={75}
                text={`${75}%`}
                styles={buildStyles({
                  textColor: "#ffb400",
                  pathColor: "#ffb400",
                })}
              />
              <p className="aboutMe__skillsName">Adobe Photoshop</p>
            </div>
            <div className="aboutMe__percentIndicator">
              <CircularProgressbar
                value={70}
                text={`${70}%`}
                styles={buildStyles({
                  textColor: "#ffb400",
                  pathColor: "#ffb400",
                })}
              />
              <p className="aboutMe__skillsName">Adobe Premiere Pro</p>
            </div>
            <div className="aboutMe__percentIndicator">
              <CircularProgressbar
                value={60}
                text={`${60}%`}
                styles={buildStyles({
                  textColor: "#ffb400",
                  pathColor: "#ffb400",
                })}
              />
              <p className="aboutMe__skillsName">Adobe Illustrator</p>
            </div>

            <div className="aboutMe__percentIndicator">
              <CircularProgressbar
                value={70}
                text={`${70}%`}
                styles={buildStyles({
                  textColor: "#ffb400",
                  pathColor: "#ffb400",
                })}
              />
              <p className="aboutMe__skillsName">Adobe After Effects</p>
            </div>
            <div className="aboutMe__percentIndicator">
              <CircularProgressbar
                value={50}
                text={`${50}%`}
                styles={buildStyles({
                  textColor: "#ffb400",
                  pathColor: "#ffb400",
                })}
              />
              <p className="aboutMe__skillsName">Maya</p>
            </div>
            <div className="aboutMe__percentIndicator">
              <CircularProgressbar
                value={45}
                text={`${45}%`}
                styles={buildStyles({
                  textColor: "#ffb400",
                  pathColor: "#ffb400",
                })}
              />
              <p className="aboutMe__skillsName">DaVinci</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
