import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyBookings = () => {
  const [booking, setBooking] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  const navigation = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/allBooking/${email}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [booking, email]);

  const handlePayment = () => {
    navigation('/payment');
  };

  const handleDelete = id => {
  const proceed = window.confirm('Are You Sure ?');
  if (proceed) {
    const url = `http://localhost:5000/bookServiceDelete/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        const remaining = booking.filter(product => product._id !== id);
        setBooking(remaining);
        toast.success('Successfully Remove This');
      });
  }
 
};

  return (
    <div className='mx-3'>
      <div className="pb-20 mx-auto w-full max-w-7xl mt-5 ">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-200">
          My Bookings
        </h2>
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="table-auto w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg">
              <tr className="text-center">
                <th className="py-4 px-2 text-lg">No.</th>
                <th className="py-4 px-2 text-lg">Cloth Name</th>
                <th className="py-4 px-2 text-lg">Customer Name</th>
                <th className="py-4 px-2 text-lg">Date</th>
                <th className="py-4 px-2 text-lg">Price</th>
                <th className="py-4 px-2 text-lg">Payment</th>
                <th className="py-4 px-2 text-lg">Remove</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-gray-50">
              {booking.map((product, index) => (
                <tr
                  key={product?._id}
                  className="text-center hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <td className="py-4 px-2 text-gray-800 font-medium">
                    {index + 1}
                  </td>
                  <td className="py-4 px-2 text-gray-700 flex justify-center items-center gap-3 ">
                    <img className='h-10 rounded-md' src={product?.products?.img} alt="" />
                    {product?.products?.name}
                  </td>
                  <td className="py-4 px-2 text-gray-700">
                    {product?.customerName}
                  </td>
                  <td className="py-4 px-2 text-gray-700">
                    {product?.date}
                  </td>
                  <td className="py-4 px-2 text-gray-700">
                    {product?.price} BDT
                  </td>
                
                  <td className="py-4 px-2">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200"
                      onClick={handlePayment}
                    >
                      Pay Now
                    </button>
                  </td>
                  <td className="py-4 px-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200"
                      onClick={() => handleDelete(product?._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
