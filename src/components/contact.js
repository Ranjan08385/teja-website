import React from "react";
import "../styles/contact.css";
import { SiMinutemailer } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";

var instaLink = "https://www.instagram.com/cr_tezzu/";
var facebookLink = "https://www.facebook.com/cr.tezzu/";
var youtubeLink = "https://youtube.com/@crtezzu9936?si=XQcSlsZFt4IEMhtK";
var xLink = "https://twitter.com/MogerTezzu";

const Contact = () => {
  const onClickSocialMedia = (link) => {
    if (link === "insta") {
      window.open(instaLink, "_blank");
    } else if (link === "facebook") {
      window.open(facebookLink, "_blank");
    } else if (link === "youtube") {
      window.open(youtubeLink, "_blank");
    } else if (link === "twitter") {
      window.open(xLink, "_blank");
    }
  };
  return (
    <div className="contact">
      <div className="contact__head">
        Get In <span>Touch</span>
      </div>

      <div className="contact__main">
        <div className="contact__info">
          <p className="contact__shy">DON'T BE SHY !</p>
          <p className="contact__details">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__address">
            <div className="contact__addressLine">
              <FaMapLocationDot size={70} color="#ffb400" />
              <div className="contact__addressPoint">
                <p className="contact__key">Address Point</p>
                <p className="contact__value">
                  #406, Niki Apartment, Brahmagiri, Udupi - 576101
                </p>
              </div>
            </div>

            <div className="contact__addressLine">
              <SiMinutemailer size={40} color="#ffb400" />
              <div className="contact__addressPoint">
                <p className="contact__key">Mail Me</p>
                <p className="contact__value">tezzumoger007@gmail.com</p>
              </div>
            </div>

            <div className="contact__addressLine">
              <BiSolidPhoneCall size={40} color="#ffb400" />
              <div className="contact__addressPoint">
                <p className="contact__key">Call Me</p>
                <p className="contact__value">+91 6360479118</p>
              </div>
            </div>
          </div>

          <div className="contact__links">
            <div
              className="contact__linkItems"
              onClick={() => onClickSocialMedia("facebook")}
            >
              <FaFacebookSquare size={30} />
            </div>
            <div
              className="contact__linkItems"
              onClick={() => onClickSocialMedia("insta")}
            >
              <PiInstagramLogoFill size={30} />
            </div>
            <div
              className="contact__linkItems"
              onClick={() => onClickSocialMedia("youtube")}
            >
              <TfiYoutube size={30} />
            </div>
            <div
              className="contact__linkItems"
              onClick={() => onClickSocialMedia("twitter")}
            >
              <BsTwitterX size={30} />
            </div>
          </div>
        </div>
        <div className="contact__field">
          <div className="contact__name">
            <input name="myInput" placeholder="Your Name" />
            <div className="contact__space"></div>
            <input name="myInput" placeholder="Your Email" />
          </div>
          <div className="contact__subject">
            <input name="myInput" placeholder="Your Subject" />
          </div>
          <div className="contact__message">
            <textarea
              className="contact__textArea"
              name="myInput"
              placeholder="Your Message"
            />
          </div>

          <div className="contact__send">Send Message</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
