import "./single.css";
import Sidebar from "../../blog_components/sidebar/Sidebar";
import SinglePost from "../../blog_components/singlePost/SinglePost";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../blog_components/header/Header";

import Footer from "../../components/footer/Footer"
export default function Single() {
  return (
      <div className="super-container">
        <div className="row">
          <Navbar/>
        </div>
        <div className="row">
          <Header/>
        </div>
       
        <div className="row">
          <div className="col-md-8">
            <SinglePost/>
          </div>
          <div className="col-md-4">
            <Sidebar/>
          </div>
        </div>
      <Footer/>
      </div>
   
  );
}
