import Footer from "../footer/Footer";
import MailList from "../mailList/MailList";
import Navbar from "../navbar/Navbar";
import "./help.css";
import logo from "./images/logo.jpeg";
const Help = () => {
  return (
    <div>
      <Navbar />

      <div className="terms1">
        <img className="logo5" src={logo} alt="" />
        <h1 className="mailTitle">How Can We Help You ?</h1>
      </div>
      <MailList />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Help;
