
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "./Listhotels.scss"
import { hotelInputs } from "../../formSource";
import useFetch from "./hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Listhotels() {

     const navigate = useNavigate();
     const [files, setFiles] = useState("");
     const [info, setInfo] = useState({});
     const [rooms, setRooms] = useState([]);

     const { data, loading } = useFetch("/roomslist");

     const handleChange = (e) => {
       setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
     };

     const handleSelect = (e) => {
       const value = Array.from(
         e.target.selectedOptions,
         (option) => option.value
       );
       setRooms(value);
     };

    //  console.log(files);

     const handleClick = async (e) => {
       e.preventDefault();
       try {
         const list = await Promise.all(
           Object.values(files).map(async (file) => {
             const data = new FormData();
             data.append("file", file);
             data.append("upload_preset", "upload");
             const uploadRes = await axios.post(
               "https://api.cloudinary.com/v1_1/de1e0fspk/image/upload",
               data
             );

             const { url } = uploadRes.data;
             return url;
           })
         );

         const newhotel = {
           ...info,
           rooms,
           photos: list
         };

         await axios.post("/hotels", newhotel);
       } catch (err) {
         console.log(err);
       }
       alert("Uploaded..");
       navigate("/hotels");
     };

  return (
    <>
      <div className="new">     
        <div className="newContainer">  
          <div className="top" >
            <h1>List your Hotel</h1>
          </div>
          <div className="bottom">
            <div className="left" style={{backgroundColor:"white"}}>
              <img
                src={
                  files
                    ? URL.createObjectURL(files[0])
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form style={{height:'100%', width:'80%'}}>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                    style={{ display: "none" }}
                  />
                </div>

                {hotelInputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      id={input.id}
                      onChange={handleChange}
                      type={input.type}
                      placeholder={input.placeholder}
                    />
                  </div>
                ))}
                <div className="formInput">
                  <label>Featured</label>
                  <select id="featured" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>
                <div className="selectRooms">
                  <label>Rooms</label>
                  <select id="rooms" multiple onChange={handleSelect}>
                    {loading
                      ? "loading"
                      : data &&
                        data.map((room) => (
                          <option key={room._id} value={room._id}>
                            {room.title}
                          </option>
                        ))}
                  </select>
                </div>
                <button onClick={handleClick}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listhotels