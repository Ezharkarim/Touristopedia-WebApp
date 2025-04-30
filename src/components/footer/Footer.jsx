import { Link } from "react-router-dom";
import "./footer.css";
import "./footer_responsive.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <div className="super_container">
        <div className="copyright">
          <div className="container1">
            <div className="row">
              <div className="col-lg-3 order-lg-1 order-2  ">
                <div className="copyright_content d-flex flex-row align-items-center">
                  <div>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="/" target="_blank">
                      Ezhar & Faizan
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-lg-2 order-1">
                <div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                  <div className="footer_nav">
                    <ul className="footer_nav_list">
                      <li className="footer_nav_item">
                        <Link to="/help">Help</Link>
                      </li>
                      <li className="footer_nav_item">
                        <Link to="/about">about us</Link>
                      </li>
                      <li className="footer_nav_item">
                        <Link to="/terms">terms&conditons</Link>
                      </li>
                      <li className="footer_nav_item">
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="footer">
            <div classNameName="fLists">
                <Link to="/help">
                <ul classNameName="fList">
                    <li classNameName="fListItem">Help</li>
                </ul>
                </Link>
                <Link to="/about">
                <ul classNameName="fList">
                    <li  classNameName="fListItem">About</li>
                </ul>
                </Link>
                <Link to="/terms">
                <ul classNameName="fList">
                    <li  classNameName="fListItem">Terms&Conditions</li>
                </ul>
                </Link>
                <Link to="/contact">
                <ul classNameName="fList">
                    <li  classNameName="fListItem">ContactUs</li>
                </ul>
                </Link>
            </div>
            <div classNameName="fText">
                
            <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                
                <img classNameName="logo1" src={logo} alt="" />
                
                
                </Link> <span classNameName="sp123"> © Copyright 2022. All Rights Reserved. BOOK-EZ,Inc.</span>
                <br />

            </div>

            
            <br />
            <br />
            
        </div> */}
    </>
  );
};
export default Footer;
