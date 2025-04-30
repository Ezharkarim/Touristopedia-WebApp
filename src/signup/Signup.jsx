import "./signup.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import axios from "axios";

const initialValues = {
  username: "",
  email: "",
  country: "",
  password: "",
  cpassword: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        const { cpassword, ...data } = values;
        // console.log(data);
        const resp = axios.post("/auth/register", data).catch((err) => {
          if (err && err.resp) {
            // console.log("error", err);
          }
             
          toast.error("Some thing wrong!!");
        });
        if (resp) {
          toast.success("Sign up Successfully");
          navigate("/login");
        }
      },
    });
  // console.log(
  //   "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
  //   errors
  // );
  return (
    <>
      <div className="ftt">
        <Navbar />
        <div className="signup-form">
          <form onSubmit={handleSubmit} method="POST">
            <h2>Sign Up</h2>

            <div className="form-group">
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
            </div>

            <div className="form-group">
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
            </div>

            <div className="form-group">
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
            </div>

            <div className="form-group">
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
            </div>

            <div className="form-group">
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
            </div>

            <div className="form-group">
              <label className="form-check-label">
                <input type="checkbox" required="required" /> I accept the{" "}
                <Link to="/terms">Terms of Use</Link> &amp;{" "}
                <a href="/">Privacy Policy</a>
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
            <div className="hint-text">
              Already have an account? <Link to="/Login">Login here!</Link>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
