import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import SignUp from './Components/Login/SignUp';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import AddItem from './Components/Pages/Dashboard/AddItem';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageItem from './Components/Pages/Dashboard/ManageItem';
import AppleInventory from './Components/Pages/Home/AppleInventory';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Share/Navbar';
import NotFound from './Components/Pages/Share/NotFound';
// animation
import 'animate.css/animate.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BookServices from './Components/Pages/BookServices/BookServices';
import AddTailors from './Components/Pages/Dashboard/Add Tailors/AddTailors';
import ManageContacts from './Components/Pages/Dashboard/ManageContacts';
import ManageTailors from './Components/Pages/Dashboard/ManageTailor/ManageTailors';
import MyProfile from './Components/Pages/Dashboard/Profile/MyProfile';
import BookCloth from './Components/Pages/Home/Our Cloths/BookCloth';
import MyBookings from './Components/Pages/My Booking/MyBookings';
import BKashFirst from './Components/Pages/My Booking/Payment/BKashFirst';
import MyItems from './Components/Pages/MyItems/MyItems';
import PayNow from './Components/Pages/MyItems/PayNow';
import NeedsATailors from './Components/Pages/Needs A Tailor/NeedsATailors';
import AddReview from './Components/Pages/Review/AddReview';

Aos.init();

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<AppleInventory />} />
        <Route path="/bookCloth/:id" element={<BookCloth />} />
        <Route path="/about" element={<About />} />
        <Route path="/tailor" element={<NeedsATailors />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route
          path="/myBooking"
          element={
            <RequireAuth>
              <MyBookings />
            </RequireAuth>
          }
        /> */}
        <Route path="/payment" element={<BKashFirst />} />
        <Route
          path="/bookService/:id"
          element={
            <RequireAuth>
              <BookServices />
            </RequireAuth>
          }
        />
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/addAReview"
          element={
            <RequireAuth>
              <AddReview />
            </RequireAuth>
          }
        />
        <Route
          path="/myBooking"
          element={
            <RequireAuth>
              <MyBookings />
            </RequireAuth>
          }
        />
        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<ManageItem />} />
          <Route path="addItem" element={<AddItem />} />
          <Route path="editProfile" element={<MyProfile />} />          
          <Route path="manageItem" element={<ManageItem />} />
          <Route path="manageTailor" element={<ManageTailors />} />
          <Route path="addTailors" element={<AddTailors />} />
          <Route path="contact" element={<ManageContacts />} />
        </Route>
        {/* Dashboard End */}

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/payNow" element={<PayNow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
