import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./localfood.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css filenp
import MailList from "../mailList/MailList";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/blog_responsive.css";
import "./style/blog_styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../blog_components/header/Header";
import Posts from "../../blog_components/posts/Posts";
import Sidebar from "../../blog_components/sidebar/Sidebar";
import { useLocation } from "react-router";

const Localfood = ({ type }) => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="super_container" id="lclfod">
      <Navbar />
      <div className="bgimg">
        <div className="row">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="row">
          <div className="col-md-8" id="pst">
            <Posts posts={posts} />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
      <MailList />

      <Footer />
    </div>
  );
};
export default Localfood;
