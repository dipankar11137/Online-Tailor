import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import Footer from '../Share/Footer';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-slate-700">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content pt-20">
             

              {user?.email === 'abc@def.com' && (
                <>
                  <li>
                    <Link
                      to="/dashboard/manageItem"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      Manage Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/manageTailor"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      Manage Tailor
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/contact"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      Manage Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/addItem"
                      className="font-semibold mt-1  text-xl hover:text-orange-600"
                    >
                      Add Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/addTailors"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      Add Tailors
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
