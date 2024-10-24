import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageContact from './ManageContact';

const ManageContacts = () => {
  const [contacts, setContact] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/contact')
      .then(res => res.json())
      .then(data => setContact(data));
  }, [contacts]);

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/contact/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = contacts.filter(product => product._id !== id);
          setContact(remaining);
          toast.success('Successfully Remove');
        });
    }
  };
  return (
    <div className="pb-20 mx-6 mt-5 pb-20">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center ">
              <th></th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Phone</th>
              <th className="text-xl">Description</th>
              <th className="text-xl">Remove</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <ManageContact
                key={contact._id}
                contact={contact}
                index={index + 1}
                handleDelete={handleDelete}
              ></ManageContact>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContacts;
