import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Footer from '../Share/Footer';

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const updateData = { ...data };
    const url = `http://localhost:5000/contact`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Successfully Submit ');
        reset();
      });
  };
  return (
    <div>
      <div className="py-16 lg:px-16  rounded-xl text-black">
        <h2 className="text-orange-500 text-center text-3xl font-bold uppercase mb-5">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center items-center lg:gap-3 border-2 shadow-2xl shadow-blue-700 p-10 rounded-xl">
          <div>
            <img
              className="h-[500px] rounded-xl"
              src="https://st2.depositphotos.com/1265075/7581/i/600/depositphotos_75818865-stock-photo-web-contact-us-concept.jpg"
              alt=""
            />
          </div>
          <div className="card w-96   shadow-inner shadow-red-600">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Name is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* email */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is Required',
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* phone */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Phone
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
                    {...register('phone', {
                      required: {
                        value: true,
                        message: 'Phone is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.phone?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Description */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Description
                    </span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter Your Description"
                    className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner pt-1 h-20"
                    {...register('description', {
                      required: {
                        value: true,
                        message: 'Description is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.description?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.description.message}
                      </span>
                    )}
                  </label>
                </div>

                <input
                  className="btn btn-orange-500 w-full text-white"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
