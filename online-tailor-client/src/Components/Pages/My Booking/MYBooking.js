import React from 'react';

const MYBooking = ({ service, handleDelete, handlePayment }) => {
  return (
    <tr className="text-center">
      <td>
        <img className="w-36 rounded-lg" src={service?.img} alt="" />
      </td>
      <td>{service?.name}</td>
      <td>{service?.customerName}</td>
      <td>{service?.service}</td>
      <td>{service?.price} BDT</td>
      <td>{service?.address}</td>
      <td>{service?.date}</td>

      <td>
        <button
          onClick={() => handlePayment()}
          className="btn btn-secondary font-bold btn-sm"
        >
          Payment
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(service?._id)}
          className="btn bg-red-600 font-bold btn-sm"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MYBooking;
