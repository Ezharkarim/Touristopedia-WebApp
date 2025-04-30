import React from "react";
import Navbar from "./navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faBus, faHotel } from "@fortawesome/free-solid-svg-icons";

const Selecttype = () => {
  return (
    <>
      <Navbar />
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-3"> </div>
        <div className="col-md-7 ">
          <h5>List your property</h5>
          <span>Become partner</span>
          <div className="row ">
            <div
              className="col-md-5 border border-primary rounded"
              style={{
                alignItems: "center",
              }}
            >
              <NavLink to="/Listhotels">
                <div className="row" style={{ margin: "40px" }}>
                  <FontAwesomeIcon icon={faHotel} size="10x" />
                </div>
                <div className="row">
                  <h3 style={{ textAlign: "center" }}>List your Hotel</h3>
                </div>
              </NavLink>
            </div>

            <div
              className="col-md-5 border border-primary rounded"
              style={{
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <NavLink to="/Listcars">
                <div className="row" style={{ margin: "40px" }}>
                  <FontAwesomeIcon icon={faBus} size="10x" />
                </div>
                <div className="row">
                  <h3 style={{ textAlign: "center" }}>List your Vehicle</h3>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-2"> </div>
      </div>
    </>
  );
};

export default Selecttype;
