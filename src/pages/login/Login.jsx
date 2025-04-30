import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
      toast.success("Login successfully !");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <div className="bglogin">
        <Navbar />
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <form disabled={loading} onClick={handleClick} method="POST">
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Username
                      </label>
                      <input
                        type="text"
                        placeholder="username"
                        id="username"
                        onChange={handleChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="password"
                        id="password"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />

                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>
                    <div></div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                    <hr className="my-4" />
                    <NavLink
                      to="/forgot"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <span className="sh1">Forgot Password..</span>
                    </NavLink>
                    <div classNameName="hint-text">
                      Don't have account!{" "}
                      <Link to="/register">Create account!</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;

// import axios from "axios"
// import { useContext } from "react"
// import { useState } from "react"
// import { AuthContext } from "../../context/AuthContext"
// import "./login.css"
// import logo from "../../images/logo.jpeg"
// import { NavLink, useNavigate } from "react-router-dom"

// const Login=()=>{
//     const [credentials,setCredentials]=useState({
//         username : undefined,
//         password : undefined,
//     })

//     const {loading,error,dispatch}=useContext(AuthContext)
//     const navigate=useNavigate()
//     const handleChange=(e)=>{
//         setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
//     }
//     const handleClick=async (e)=>{
//         e.preventDefault()
//         dispatch({type:"LOGIN_START"})
//         try{
//             const res=await axios.post("/auth/login",credentials)
//             dispatch({type:"LOGIN_SUCCESS",payload: res.data.details})
//             navigate("/")

//         }catch(err){
//             dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
//         }
//     }

//     return(
//         <div className="login">

//             <div className="lContainer">
//             <h1>WELCOME</h1>

//                 <img className="logol" src={logo} alt="" />

//                 <input type="text" className="lInput" placeholder="username" id="username" onChange={handleChange} />
//                 <input type="password" className="lInput" placeholder="password" id="password" onChange={handleChange} />
//                 <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
//                 <span className="shr">
//                 <NavLink
//               to="/register"
//               style={{ color: "inherit", textDecoration: "none" }}
//             >
//               <span className="sh1"> New User ?Register..</span>
//             </NavLink>
//             <br />
//             <br />

//                 </span>

//                 {error && <span className="message">{error.message}....</span>}
//             </div>
//         </div>
//     )
// }
// export default Login
