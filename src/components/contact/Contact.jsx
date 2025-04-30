import Footer from "../footer/Footer";
import MailList from "../mailList/MailList";
import Navbar from "../navbar/Navbar";
import "./contact.css";
import ezhar from "./images/ezhar.jpg";
import faizan from "./images/faizan.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <hr />
      <div class="terms1">
        <h1 class="ls">Founders......</h1>
        <table cellpadding="80">
          <tr>
            <td>
              <ul>
                <img src={ezhar} alt="" className="pl" />
                <li class="lb">Ezhar karim.</li>
                <li class="lb">+923475164198</li>
                <li class="lb">ezharkarim19@gmail.com</li>
                <li class="lb">Software Developer</li>
              </ul>
            </td>
            <td></td>
            <td>
              <ul>
                <img src={faizan} alt="" className="pl" />
                <li class="lb">Syed Muhammad faizan</li>
                <li class="lb">9381671576.</li>
                <li class="lb">faizan@gmail.com</li>
                <li class="lb">Software Developer</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <MailList />
      <br />
      <br />

      <div className="ft"></div>
      <Footer />
    </div>
  );
};

export default Contact;
