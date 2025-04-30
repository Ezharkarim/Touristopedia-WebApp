import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";
import { CircularProgress } from "@material-ui/core";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import image1 from "../../images/1.jpg"
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";

const Featured = () => {
  const navigate = useNavigate();
  
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=Skardu,Gilgit,Hunza,Aliabd,Shigar"
  );

  const handleclick = () => {
    navigate("/hotels/Skardu");
  };
  const handleclick1 = () => {
    navigate("/hotels/Gilgit");
  };
  const handleclick2 = () => {
    navigate("/hotels/Hunza");
  };
  const handleclick3 = () => {
    navigate("/hotels/Aliabad");
  };
  const handleclick4 = () => {
    navigate("/hotels/Shigar");
  };

  return (
    <div className="featured">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <div className="row">
            <div className="col-md-4">
              <div className="featuredItem">
                <img
                  src={image1}
                  alt=""
                  className="featuredImg"
                  onClick={handleclick}
                />
                <div className="featureTitles">
                  <h1>Skardu</h1>
                  <h2>{data[0]} Properties</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="featuredItem">
                <img
                  src={image2}
                  alt=""
                  className="featuredImg"
                  onClick={handleclick1}
                />
                <div className="featureTitles">
                  <h1>Gilgit</h1>
                  <h2>{data[1]} Properties</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="featuredItem">
                <img
                  src={image3}
                  alt=""
                  className="featuredImg"
                  onClick={handleclick2}
                />
                <div className="featureTitles">
                  <h1>Hunza</h1>
                  <h2>{data[2]} Properties</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="featuredItem">
                <img
                  src={image4}
                  alt=""
                  className="featuredImg"
                  onClick={handleclick3}
                />
                <div className="featureTitles">
                  <h1>Aliabad</h1>
                  <h2>{data[2]} Properties</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="featuredItem">
                <img
                  src={image5}
                  alt=""
                  className="featuredImg"
                  onClick={handleclick4}
                />
                <div className="featureTitles">
                  <h1>Shigar</h1>
                  <h2>{data[2]} Properties</h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Featured;
