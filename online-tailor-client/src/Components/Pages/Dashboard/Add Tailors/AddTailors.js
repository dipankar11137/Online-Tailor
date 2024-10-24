import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTailors = () => {
  const [employeeStatus, setEmployeeStatus] = useState('');
  // console.log(employeeStatus);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const changeUrl = { ...data };
    // console.log(changeUrl);
    const url = `http://localhost:5000/tailors`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(changeUrl),
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Successfully Add A Tailor');
        reset();
      });
  };
  return (
    <div>
      <div className=" flex justify-center">
        <div>
          <div className=" w-full  bg-slate-100 rounded-lg text-slate-800 p-6 mt-7 mb-20">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/*Company Name */}
              {/* <label className="label">
            <span className="label-text font-bold text-lime-700 text-xl">
              Company Name
            </span>
          </label> */}
              <h1 className="pb-5 text-3xl pl-2 font-bold uppercase">
                Add A Tailor
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered text-xl pt-1 bg-white w-full  hover:shadow-xl  border-b-blue-900"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is Required',
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === 'required' && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.name?.message}
                  </span>
                )}
              </label>
              {/* email */}
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered text-xl pt-1 bg-white w-full  hover:shadow-xl  border-b-blue-900"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is Required',
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
              {/*photo Url */}

              <input
                type="img"
                placeholder="Image Url"
                className="input input-bordered  pt-1 bg-white w-full   text-xl hover:shadow-xl border-b-blue-900"
                {...register('img', {
                  required: {
                    value: true,
                    message: 'URL is Required',
                  },
                })}
              />

              <label className="label">
                {errors.img?.type === 'required' && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.img?.message}
                  </span>
                )}
              </label>
            
              {/*job LOcation */}

              <input
                type="text"
                placeholder="Address"
                className="input input-bordered text-xl pt-1 bg-white w-full    hover:shadow-xl border-b-blue-900"
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Address  is Required',
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

              {/* Experience */}
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered  bg-white w-full    text-xl hover:shadow-xl border-b-blue-900"
                {...register('number', {
                  required: {
                    value: true,
                    message: 'Number is Required',
                  },
                })}
              />
              <label className="label">
                {errors.number?.type === 'required' && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.number?.message}
                  </span>
                )}
              </label>
              {/* Vacancy */}
              <input
                type="number"
                placeholder="Salary "
                className="input input-bordered  bg-white w-[300px]  text-xl hover:shadow-xl border-b-blue-900"
                {...register('salary', {
                  required: {
                    value: true,
                    message: 'Salary is Required',
                  },
                })}
              />
              <label className="label">
                {errors.salary?.type === 'required' && (
                  <span className="label-text-alt text-red-500 text-xl">
                    {errors?.salary?.message}
                  </span>
                )}
              </label>
             

          
                <input
                  className="btn mt-5 w-full  text-white"
                  type="submit"
                  value="Submit"
                />
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTailors;
