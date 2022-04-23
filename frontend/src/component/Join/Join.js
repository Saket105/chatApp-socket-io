import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setname] = useState("");
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>CHAT</h1>
        <input
          onChange={(e) => setname(e.target.value)}
          type="text"
          id="joinInput"
          placeholder="Enter Your ID/Name"
        />
        <Link
          to="/chat"
          onClick={(event) => (!name ? event.preventDefault() : null)}
        >
          <button className="joinbtn" onClick={sendUser}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
