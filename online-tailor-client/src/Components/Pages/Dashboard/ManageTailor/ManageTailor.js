import React from 'react';

const ManageTailor = ({ service, handleAdd, handleDelete, index }) => {
  return (
    <tr className="text-center border-b bg-slate-700 hover:bg-gray-600 transition-colors duration-300">
      <td className="font-semibold ">{index}</td>
      <td className="py-4">
        <img
          className="w-12 h-10 rounded-lg object-cover shadow-md"
          src={service?.img}
          alt={service?.name}
        />
      </td>
      <td className="font-semibold ">{service?.name}</td>
      <td className="  font-semibold">{service?.price} BDT</td>
      <td>
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
        >
          Add Tailors
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(service?._id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageTailor;