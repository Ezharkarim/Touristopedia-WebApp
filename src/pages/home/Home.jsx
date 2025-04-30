import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import PropertyList1 from "../../components/propertyList1/PropertyList1";

const Home = () => {
  return (
    <div className="background">
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />
        <hr style={{ width: "76%" }} />
        <h1 className="homeTitle">Property Type</h1>
        <div className="row">
          <div className="col-md-6">
            <PropertyList />
          </div>
          <div className="col-md-6">
            <PropertyList1 />
          </div>
        </div>

        <hr style={{ width: "76%" }} />
        <h1 className="homeTitle">Best Deals</h1>
        <FeaturedProperties />
        <hr style={{ width: "76%" }} />
        <MailList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
