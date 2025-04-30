import "./listcity1.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import SearchItemcity from "../../components/searchItemcity/SearchItemcity";

const Listcity4 = () => {
  const { data, loading } = useFetch(`/hotels?city=Aliabad`);

  return (
    <div className="kuku">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItemcity item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Listcity4;
