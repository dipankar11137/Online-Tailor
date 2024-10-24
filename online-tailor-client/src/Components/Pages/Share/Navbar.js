import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigator = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigator('/');
  };

  const manuItem = (
    <>
      <li className="">
        <Link to="/about">About</Link>
      </li>
      <li className="">
        <Link to="/tailor">Needs A Tailor</Link>
      </li>
      {user && (
        <li className="">
          <Link to="/myBooking">My Booking</Link>
        </li>
      )}
      {user?.email==='abc@def.com' && (
        <li className="">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      <li className="">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary text-white  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manuItem}
          </ul>
        </div>
        <Link to="/">
          <h1 className="pl-40 text-2xl font-bold">Online Tailor</h1>
          {/* <a className="btn btn-ghost normal-case text-xl pl-20">
            <img className="w-14 rounded-2xl " src={logo} alt="" />
          </a> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{manuItem}</ul>
      </div>
      <div className="navbar-end pr-10">
        {/* Search From */}
        <div className="form-control pr-7">
          <div className="input-group"></div>
        </div>

        <ul>
          <li className="  pr-20">
            {user ? (
              <button className=" " onClick={logout}>
                Sign Out
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
