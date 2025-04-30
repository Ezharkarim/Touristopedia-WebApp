import "./navbar.css"
import {Link} from "react-router-dom"
import logo from "../../../images/1.png"


const Navbar = () =>{
   
      
    return (
      <div className="navbar">
        <div className="navContainer">
          <Link
            to="/PropertySignin"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
      </div>
    );
}

export default Navbar