import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ManageSingleItem from "./ManageSingleItem";

const ManageItem = () => {
  const [services, setServices] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [services]);
  const handleAdd = () => {
    navigator('/dashboard/addItem');
  };
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = services.filter(product => product._id !== id);
          setServices(remaining);
          toast.success('Successfully Remove This');
        });
    }
  };
  return (
    <div className="pb-20 mx-6 mt-5">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto w-full bg-white rounded-lg">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr className="text-center">
              <th className="py-3">Index</th>
              <th className="py-3"></th>
              <th className="text-lg font-semibold">Name</th>
              <th className="text-lg font-semibold">Price</th>
              <th className="text-lg font-semibold">Add</th>
              <th className="text-lg font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service ,index)=> (
              <ManageSingleItem
                key={service._id}
                service={service}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                index={index+1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
