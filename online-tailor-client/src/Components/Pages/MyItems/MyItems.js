import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import MyItem from "./MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    console.log(email);
    const url = `http://localhost:5000/appleBuyProductsEmail/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const handleRemove = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/appleBuyProducts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((product) => product._id !== id);
          setItems(remaining);
          toast.success("Successfully Remove");
        });
    }
  };
  return (
    <div className="bg-slate-300 pb-96">
      <h1 className="text-center text-lime-600 font-bold text-5xl p-4">
        {" "}
        <samp className="text-lime-600">My</samp> Items{" "}
      </h1>
      <div className="px-56">
        {items.map((item) => (
          <MyItem
            key={item._id}
            item={item}
            handleRemove={handleRemove}
          ></MyItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
