import "./Forgot.css"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
// import {  useNavigate } from "react-router-dom"
import { useState } from "react"
import useFetch from "../../hooks/useFetch"

const Forgot=()=>{
  const {data,loading}=useFetch(`/users/`)

  const [credentials, setCredentials] = useState("");

  const [ setUserid] = useState("");
  const [ setUsername] = useState("");



  // const navigate = useNavigate();

  const handleClick = async (e) => {
      e.preventDefault()
      data.forEach(element => {
  
        if((credentials)===(element.email)){
          setUserid(element._id)
          setUsername(element.username)
        }
        
      });
      alert("Validated Successfully..")
    
      
    };
  
    // const handleclick=async(e)=>{
    //   e.preventDefault()
    //   if(userid===""){
    //       alert("Invalid Email..")
    //   }else{
    //       alert("Correct Credentials")
    //       navigate("/forgotid",{state:{userid,username}}) ;

    //   }
     
    // }
    return(
      <div className="bglogin">
        <Navbar />
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h4 className="sp">Reset Your Password</h4>
                  <div className="form-outline mb-4">
                    <label className="form-label"> Enter Your Email to Reset Your Password...</label>
                    <input type="text"
                      placeholder="Email" 
                      id="email" 
                      onChange={(e)=>setCredentials(e.target.value)}
                      className="form-control form-control-lg" />
                  </div>

                  <button disabled={loading} onClick={handleClick} className="btn btn-primary btn-lg btn-block" id="forget" type="submit">Validate Your Email</button>
                  <button disabled={loading} onClick={handleClick} className="btn btn-primary btn-lg btn-block" id="forget" type="submit">Reset Password</button>
                  <hr className="my-4" />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
        // <div className="login">
            
        //     <div className="lContainer">
        //     <h1>WELCOME</h1>
            
                
        //         <img className="logol" src={logo} alt="" />
        //         <span className="sp"> Enter Your Email to Reset Your Password...</span>
                
        //         <input type="text" className="lInput" placeholder="Email" id="email" onChange={(e)=>setCredentials(e.target.value)} />
               
        //         <button disabled={loading} onClick={handleClick} className="lButton"> Validate Your Email</button>
        //         <button disabled={loading} onClick={handleclick} className="lButton">Reset Password</button>
               

                
        //     </div>
        // </div>
    )
}
export default Forgot