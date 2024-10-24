import React from 'react';

const ManageContact = ({ contact, index, handleDelete }) => {
  console.log(contact);
  return (
    <tr className="text-center">
      <td>{index}</td>
      <td>{contact?.name}</td>
      <td>{contact?.email}</td>
      <td>{contact?.phone}</td>
      <td>{contact?.description}</td>

      <td>
        <button
          onClick={() => handleDelete(contact?._id)}
          className="btn btn-red-500 font-bold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageContact;
