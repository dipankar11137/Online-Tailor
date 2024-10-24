import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../Images/Payment/bikash.jpg";

const PayNow = () => {
  const navigator = useNavigate();

  const handleClick = () => {
    toast.success("Successfully Done Payment");
    navigator("/");
  };
  return (
    <div className="bg-base-100 items-center flex">
      <img src={img} alt="" />
      <button onClick={handleClick} className="btn ml-44">
        Pay NOW
      </button>
    </div>
  );
};

export default PayNow;
