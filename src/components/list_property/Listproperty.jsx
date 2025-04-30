import Navbar from "./navbar/Navbar";
import React, {useState} from "react";
// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Listproperty = () => {
    
        const navigate = useNavigate();
        const handleonclick =() =>{
          navigate("/PropertySignin")
        }
         const handleonclick1 = () => {
           navigate("/listpropertyRegistration");
         };
            const [email, setEmail] = useState("");
            // const [isEmailPresent, setIsEmailPresent] = useState(false);

            // const checkEmailExists = async () => {
            //   try {
            //     const response = await axios.get("/api/check-email", {
            //       params: { email }
            //     });
            //     setIsEmailPresent(response.data.exists);
            //   } catch (error) {
            //     console.error(error);
            //     // Handle error
            //   }
            // };

  return (
    <>
      <Navbar />
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-md-4"></div>

        <div className="col-md-3">
          <p style={{ fontSize: "20px" }}>
            <strong>Create your partner account</strong>
          </p>
          <p style={{ fontSize: "13px" }}>
            Create an account to list and manage your property.
          </p>
          <polygon>
            <strong>Enter your email</strong>
          </polygon>
          <form>
            <input
              style={{ border: "1px solid", borderColor: "black" }}
              aria-label="Email address"
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <button
              type="button"
              className="btn btn-primary btn-md btn-block"
              style={{ width: "100%", marginLeft: 0, height: "50px" }}
              onClick={handleonclick1}
            >
              Continue
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
              onClick={handleonclick}
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Listproperty;
