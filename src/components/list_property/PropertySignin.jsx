import Navbar from "./navbar/Navbar";
import axios from "axios";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PropertySignin = () => {
      const navigate = useNavigate();
       const [credentials, setCredentials] = useState({
         username: undefined,
         password: undefined
       });

       const { loading, dispatch } = useContext(AuthContext);
 const handleonclick1 = () => {
           navigate("/listpropertyRegistration");
         };
       const handleChange = (e) => {
         setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
       };

       
        const handleClick = async (e) => {
          e.preventDefault();
          dispatch({ type: "LOGIN_START" });
          
          try {
            const res = await axios.post("/auth/partnerlogin", credentials);
            if (res.data.isPartner) {
              dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
              navigate("/selecttype");
            } else {
              dispatch({
                type: "LOGIN_FAILURE",
                payload: { message: "You are not allowed!" }
              });
              navigate("/PropertySignin");
            }
          } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
          }
        };
  return (
    <>
      <Navbar />
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-4"></div>

        <div className="col-md-3">
          <p style={{ fontSize: "20px" }}>
            <strong>Sign in to manage your property</strong>
          </p>

          <form disabled={loading} onClick={handleClick} method="POST">
            <input
              style={{ border: "1px solid", borderColor: "black" }}
              aria-label="Username"
              className="form-control"
              type="text"
              placeholder="Enter your Username"
              id="username"
              onChange={handleChange}
            />

            <input
              style={{ border: "1px solid", borderColor: "black" }}
              aria-label="password"
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />

            <button
              className="btn btn-primary btn-md btn-block"
              style={{ width: "100%", marginLeft: 0, height: "50px" }}
              type="submit"
            >
              Sign in
            </button>
            <p style={{ fontSize: "13px", BorderBottom: "1px solid" }}>
              Questions about your property or the Extranet? Check out Partner
              Help or ask another partner in the Partner Community.
            </p>
            <hr
              style={{
                background: "black",
                height: "1px",
                border: "none",
                width: "100%"
              }}
            />
            <button
              onClick={handleonclick1}
              type="button"
              className="btn btn-default btn-md btn-block"
              style={{
                width: "100%",
                height: "50px",
                marginLeft: 0,
                borderColor: "blue",
                color: "blue",
                border: "1px solid"
              }}
              // S
            >
              Create your partner account
            </button>
            
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default PropertySignin;
