import React from "react";
import { useNavigate } from "react-router-dom";

const MyItem = ({ item, handleRemove }) => {
  // console.log(item);
  const { _id, img, name, price, quantity } = item;
  const totalPrice = item?.appleProduct?.price * quantity;
  const navigator = useNavigate();

  const handlePay = () => {
    navigator("/payNow");
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl text-black mt-5">
      <figure>
        <img
          className="h-48 w-64 rounded-xl"
          src={item?.appleProduct?.img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <h3>Oder Quantity : {quantity}</h3>
          <h3>Price : $ {item?.appleProduct?.price}</h3>
          <h3>Total Price : $ {totalPrice}</h3>
        </div>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-lime-500">Details</button> */}
          <button onClick={handlePay} className="btn bg-lime-700">
            pay Now
          </button>
          <button
            onClick={() => handleRemove(_id)}
            className="btn btn-orange-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
