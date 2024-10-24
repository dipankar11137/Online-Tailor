import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const OurCloths = () => {
  const [user]=useAuthState(auth)
  const [products, setProduct] = useState([])
const navigator=useNavigate()
  
    useEffect(() => {
      fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
          setProduct(data);
        });
    }, [products]);
  const handleBuy = (id) => {
   navigator(`/bookCloth/${id}`);
  }
  return (
    <div>
      <div className="">
        <div>
          <h1 className="mb-5 text-5xl font-extrabold mt-2 bg-slate-700 p-3 text-center">
            Our Cloths
          </h1>
        </div>
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-5 mx-10">
          {products.map(product => (
            <div className="bg-primary p-1 rounded-b-md hover:shadow-lg shadow-rose-900">
              <div
                className="relative w-full h-44 overflow-hidden bg-white"
                // onClick={() => handleDetails(product._id)}
              >
                <img
                  className=" w-full h-full transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer"
                  src={product?.img}
                  alt={product?.name}
                />
              </div>

              <div className="text-white mt-1 flex justify-between ">
                <div>
                  <h1>{product?.name}</h1>
                  <h1 className="text-lg  font-semibold">
                    BDT {product?.price}
                    {/* <span className="text-xs">/Meter</span> */}
                  </h1>
                </div>
                <div className="flex justify-end pt-2 pr-1">
                  <button
                    onClick={user ? () => handleBuy(product?._id) : undefined}
                    disabled={!user}
                    title={!user ? 'Log in first' : ''}
                  >
                    <FaCartPlus
                      className={`text-lg  ${
                        user
                          ? 'text-white hover:text-info cursor-pointer '
                          : 'text-pink-600 cursor-not-allowed'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCloths;