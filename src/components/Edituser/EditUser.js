import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./Edituser.css"
import { useNavigate } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const EditUser=()=>{
    const { user }=useContext(AuthContext)

const [credentials1, setCredentials1] = useState({
    username:undefined,
    email:undefined,
    country:undefined,
    password:undefined,
});

const { loading } = useContext(AuthContext);

const navigate = useNavigate();

//   Handle Change Function
const handleChange = (e) => {

e.preventDefault()
setCredentials1((prev) => ({ ...prev, [e.target.id]: e.target.value }));

};


//   Handle Click Function
const handleClick = async (e) => {
e.preventDefault()
try{
    await axios.put(
        `/users/update/${user._id}`,
        credentials1
        );     
}catch(err){
    
}
navigate("/login")

};
// console.log(credentials1);
  
    
    return(
        <>
        <div className="ftt">
            <Navbar/>
                <div className="signup-form">
                <form>
                    <h2>HEllO,{user.username}  Edit Your Profile Here.</h2>

                    <div className="form-group">
                    <input
                        type="name"
                        className="form-control form-control-lg"
                        name="username"
                        id="username"
                        placeholder="Username"
                        required="required"
                        onChange={handleChange}
                    />
        
                    </div>

                    <div className="form-group">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required="required"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <input
                        type="name"
                        className="form-control form-control-lg"
                        name="country"
                        id="country"
                        placeholder="country"
                        required="required"
                        onChange={handleChange}     
                    />

                    </div>
                        
                    <div className="form-group">
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required="required"
                        onChange={handleChange}
                    />
                    </div>        
                    <div className="form-group">
                    <button disabled={loading} onClick={handleClick}  type="submit" className="btn btn-primary btn-lg">
                        Sign Up
                    </button>
                    </div>
                </form>
                </div>
            <Footer />
        </div>
        </>
)}
export default EditUser