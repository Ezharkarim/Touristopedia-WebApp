import { useContext } from "react";
import { Link } from "react-router-dom";

import "./profile.css";
import logo from "./images/logo.jpeg";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  //   Handle Change Function

  //   Handle Click Function

  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Profile</h1>
          <img
            required
            className="img"
            src={user.img ? user.img : "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt=""
          />
          <div className="details">
            <h3 className="itemTitle">{user.username}</h3>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">{user.email}</span>
            </div>

            <div className="detailItem">
              <span className="itemKey">Country:</span>
              <span className="itemValue">{user.country}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Password:</span>
              <span className="itemValue">{user.password}</span>
            </div>
          </div>
        </div>
        <div className="left">
          <img className="logol" src={logo} alt="" />
          <h1>Hello User!</h1>
          <button>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
          </button>
          <button>
            <Link
              to="/edituser"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Edit
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
