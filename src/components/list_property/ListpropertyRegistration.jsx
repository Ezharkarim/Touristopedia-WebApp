import Navbar from "./navbar/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import axios from "axios";


const ListpropertyRegistration = () => {

   const navigate = useNavigate();
  
 
   const initialValues = {
     username: "",
     email: "",
     phone: "",
     country: "",
     password: "",
     cpassword: ""
   };

const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      const { cpassword, ...data } = values;
      // console.log(data);
      const resp = axios.post("/auth/partnerregister", data).catch((err) => {
        if (err && err.resp) {
          // console.log("error", err);
        }
        
      });
      if (resp) {
      //  console.log(data);
        
        navigate("/PropertySignin");
      }
    }
  });
// console.log(
//   "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
//   errors
// );
  return (
    <>
      <Navbar />
      <div className="Container">
        <div className="row" style={{ marginTop: 30, width:"98%"}}>
          <div className="col-md-4"></div>

          <div className="col-md-3">
            <p style={{ fontSize: "20px" }}>
              <strong>Create your partner account</strong>
            </p>

            <form onSubmit={handleSubmit} method="POST">
              <input
                type="name"
                className="form-control form-control-lg"
                name="username"
                placeholder="Username"
                required="required"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p className="form-error">{errors.username}</p>
              ) : null}

              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Email"
                required="required"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}

              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Phone-No"
                required="required"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <p className="form-error">{errors.phone}</p>
              ) : null}

              <input
                type="name"
                className="form-control form-control-lg"
                name="country"
                placeholder="country"
                required="required"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.country && touched.country ? (
                <p className="form-error">{errors.country}</p>
              ) : null}

              <input
                type="password"
                className="form-control form-control-lg"
                name="password"
                placeholder="Password"
                required="required"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
              <input
                type="password"
                className="form-control form-control-lg"
                name="cpassword"
                placeholder="Confirm Password"
                required="required"
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cpassword && touched.cpassword ? (
                <p className="form-error">{errors.cpassword}</p>
              ) : null}

              <button
                type="submit"
                className="btn btn-primary btn-md btn-block"
                style={{ width: "100%", marginLeft: 0, height: "40px" }}
              >
                Next
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default ListpropertyRegistration;
