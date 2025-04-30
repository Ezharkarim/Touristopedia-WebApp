import { CircularProgress } from "@material-ui/core";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTye2bKuzhIU_SHB5N22ByKfIWy4B4qNVQyYw&usqp=CAU",
  ];
  return (
    <div className="row" id="propertylst">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}{" "}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default PropertyList;
