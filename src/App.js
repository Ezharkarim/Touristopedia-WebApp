import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import List1 from "./pages/list1/List1"
import Hotel from "./pages/hotel/Hotel"
import Rentacar from "./pages/rentacar/Rentacar"
import Login from "./pages/login/Login";
import Signup from "./signup/Signup";
import HotelType from "./components/Typesearch/HotelType";
import HotelList from "./pages/TypeList/HotelList";
import RentacarType from "./components/Typesearch/RentacarType";
import Single from "./blog_pages/single/Single";
import Localfood from "./components/Typesearch/Localfood";
import Mainpage from "./tourguide/Mainpage";
import RentacarList from "./pages/TypeList/RentacarList";
import Profile from "./components/profile/Profile";
import Booking from "./components/Bookings/Booking";
import Forgot from "./components/forgot/Forgot";
import Forgotid from "./components/forgotid/Forgotid";
import EditUser from "./components/Edituser/EditUser";

import Listproperty from "./components/list_property/Listproperty";
import PropertySignin from "./components/list_property/PropertySignin";
import ListpropertyRegistration from "./components/list_property/ListpropertyRegistration";
import Propertydetails from "./components/list_property/Propertydetails";
import Selecttype from "./components/list_property/Selecttype";
import Listhotels from "./components/list_property/Listhotels";
import Listcars from "./components/list_property/newCar/Listcars";

import Listcity1 from "./pages/listcity/Listcity1";
import Listcity2 from "./pages/listcity/Listcity2 ";
import Listcity3 from "./pages/listcity/Listcity3";
import Listcity4 from "./pages/listcity/Listcity4";
import Listcity5 from "./pages/listcity/Listcity5";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Help from "./components/help/Help";
import Terms from "./components/terms/Terms";
import Bookingcar from "./components/Bookings/Bookingcar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  // allroomColumns,
  // confirmbColumns,
  // contactColumns,
  hotelColumns,
  roomColumns,
  // userColumns,
  rentacarColumns,
  // blogColumns
} from "./datatablesource";

function App() {

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" limit={1} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listproperty" element={<Listproperty />} />
        <Route path="/Single" element={<Single />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/rentacars" element={<List1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/typehotellist" element={<HotelList />} />
        <Route path="/typeRentacarlist" element={<RentacarList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/rentacars/:id" element={<Rentacar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/allhotels" element={<HotelType />} />
        <Route path="/allRentacars" element={<RentacarType />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/localfoods" element={<Localfood />} />
        <Route path="/hotels/room/book/:roomid" element={<Booking />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/forgotid" element={<Forgotid />} />
        <Route path="hotels/Skardu" element={<Listcity1 />} />
        <Route path="hotels/Gilgit" element={<Listcity2 />} />
        <Route path="hotels/Hunza" element={<Listcity3 />} />
        <Route path="hotels/Aliabad" element={<Listcity4 />} />
        <Route path="hotels/Shigar" element={<Listcity5 />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/PropertySignin" element={<PropertySignin />} />\
        <Route path="/Listhotels" element={<Listhotels />} />
        <Route path="/Listcars" element={<Listcars />} />
        <Route
          path="/listpropertyRegistration"
          element={<ListpropertyRegistration />}
        />
        <Route path="/selecttype" element={<Selecttype />} />
        <Route path="/propertydetails" element={<Propertydetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Bookingcar" element={<Bookingcar />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/hotellist" element={<List columns={hotelColumns} />} />
        <Route
          path="/roomslist"
          index
          element={<List columns={roomColumns} />}
        />
        <Route
          path="/rentacarlist"
          element={<List columns={rentacarColumns} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
