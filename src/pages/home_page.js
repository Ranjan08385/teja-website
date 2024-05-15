import React from "react";
import "../styles/home_page.css";
import Home from "../components/home.js";
import { GetIcons } from "../components/get_icons.js";
import { useState } from "react";
import AboutMe from "../components/about_me.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import userImage from "../assets/images/profile_image.jpg";

var userImg = userImage; //"https://tunis-nextjs.netlify.app/assets/img/hero/dark.jpg";

function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");

  const onClickNavLink = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "about") {
      return <AboutMe />;
    } else if (currentPage === "project") {
      return <Projects />;
    } else if (currentPage === "contact") {
      return <Contact />;
    }
  };

  let checkSelected = (page) => {
    if (page === currentPage) {
      return "selected";
    }

    return "";
  };

  console.log("TEST ==> ", currentPage);

  return (
    <div className="home">
      <div
        className="home__sec1"
        style={{
          backgroundColor: currentPage !== "home" ? "#212529" : "#ffb400",
        }}
      >
        {currentPage === "home" ? (
          <div className="home_userImg">
            <img src={userImg} alt="" width="100%" height="100%" />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="home__sec2">
        {renderPage()}

        <div className="home__menu">
          <div
            className={`home__menuItems ${checkSelected("home")}`}
            onClick={() => onClickNavLink("home")}
          >
            <GetIcons name={"home"} size={30} />
            <p className="home__menuText">Home</p>
          </div>
          <div
            className={`home__menuItems ${checkSelected("about")}`}
            onClick={() => onClickNavLink("about")}
          >
            <GetIcons name={"about"} size={30} />
            <p className="home__menuText">About</p>
          </div>
          <div
            className={`home__menuItems ${checkSelected("project")}`}
            onClick={() => onClickNavLink("project")}
          >
            <GetIcons name={"projects"} size={30} />
            <p className="home__menuText">Projects</p>
          </div>
          <div
            className={`home__menuItems ${checkSelected("contact")}`}
            onClick={() => onClickNavLink("contact")}
          >
            <GetIcons name={"contact"} size={30} />
            <p className="home__menuText">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
