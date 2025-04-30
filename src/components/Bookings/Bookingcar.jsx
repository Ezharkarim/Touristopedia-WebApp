import "./booking.css";
import { format } from "date-fns";
import React, { useContext} from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

function Booking() {
  const { user } = useContext(AuthContext);
  const Print = (e) => {
    e.preventDefault();
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const { dates } = useContext(SearchContext);


  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <div className="detailItem1">
              <h2>We will Confirm your room booking via email with in 24 Hours</h2>
          </div>
          <h1>Booking Info..</h1>

          <div className="details" id="printablediv">
            
            <hr className="hr2" />
            <span>
              <span className="itemKey">Booking Id:</span>
            </span>

            <div className="detailItem">
              <span className="itemKey">From Date :</span>
              <span className="itemValue">{`  ${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )}`}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">To Date :</span>
              <span className="itemValue">{`  ${format(
                dates[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
            </div>

            <div className="detailItem">
              <span className="itemKey">Status:</span>

              <span className="itemValue">Reserved.</span>
            </div>
            <div className="detailItem">
            <div className="detailItem">
              <span className="itemKey">Booking type:</span>

              <span className="itemValue">Rentacar.</span>
            </div>
            </div>

            <div className="detailItem">
              <span className="itemKey">UserName:</span>
              <span className="itemValue">{user.username}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">{user.email}</span>
            </div>
            <div className="detailItem">
              <button onClick={Print}>Print</button>
            </div>
            
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Booking;
