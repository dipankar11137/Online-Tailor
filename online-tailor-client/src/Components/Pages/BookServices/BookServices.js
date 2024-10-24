import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookServices = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [bookServices, setBookServices] = useState([]);
  // console.log(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/tailor/${id}`)
      .then(res => res.json())
      .then(data => setBookServices(data));
  }, [id]);

  // console.log(bookServices);

  const customerName = user?.displayName;
  const email = user?.email;
  const img = bookServices.img;
  const name = bookServices.name;
  const service = bookServices.service;
  const price = bookServices.price;

  const onSubmit = data => {
    const updateData = {
      ...data,
      img: img,
      name: name,
      service: service,
      price: price,
      customerName: customerName,
      email: email,
    };
    // console.log(updateData);
    const url = `http://localhost:5000/bookTailors`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Successfully Book This Person');
        reset();
      });
  };
  return (
    <div className="h-screen">
      <div className="flex justify-center ">
        <div className=" w-96 bg-slate-700 text-black rounded-xl shadow-2xl p-10 mt-7">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold text-center">
              {/* {appleProduct?.name} */}
            </h1>
            <label>
              <img className="pb-2 h-52 rounded-xl" src={bookServices?.img} alt="" />
            </label>

            <h1 className=" font-bold text-lime-700 text-2xl text-center pb-2 bg-white my-2 rounded-lg">
              {bookServices?.name} 
            </h1>

            <textarea
              type="text"
              placeholder="Your Address"
              className="input input-bordered text-xl pt-1 bg-white w-full max-w-xs h-20 hover:shadow-xl"
              {...register('address', {
                required: {
                  value: true,
                  message: 'Address is Required',
                },
              })}
            />
            <label className="label">
              {errors.address?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.address?.message}
                </span>
              )}
            </label>

            {/* number */}
            <input
              type="number"
              placeholder="Phone Number"
              className="input input-bordered  bg-white w-full max-w-xs  hover:shadow-xl"
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Phone is Required',
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.phone?.message}
                </span>
              )}
            </label>
            {/* date */}
            <input
              type="date"
              placeholder="Phone Number"
              className="input input-bordered  bg-white w-full max-w-xs  hover:shadow-xl"
              {...register('date', {
                required: {
                  value: true,
                  message: 'Date is Required',
                },
              })}
            />
            <label className="label">
              {errors.date?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.date?.message}
                </span>
              )}
            </label>

            <input
              className="btn  w-full text-white mt-5"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookServices;
