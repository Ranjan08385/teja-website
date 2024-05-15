import { IoHomeOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

export const GetIcons = ({ name, size = 30 }) => {
  const fetchIcons = () => {
    switch (name) {
      case "home":
        return <IoHomeOutline size={size} />;
      case "about":
        return <FaUserAlt size={size} />;
      case "projects":
        return <FaComputer size={size} />;
      case "contact":
        return <BiSolidContact size={size} />;
      default:
        return "";
    }
  };

  return <div>{fetchIcons()}</div>;
};
