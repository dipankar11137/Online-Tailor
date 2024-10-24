import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Pages/Share/Loading';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      SendEmailVerification: true,
    });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }
  const image =
    'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=';

  const createDBUser = data => {
    const email = data.email;
    const address = data.address;
    const name = data.name;
    const nid = data.nid;
    const phone = data.phone;
    const updateData = { email, address, name, nid, phone, image };
    // console.log(updateData);
    fetch(`http://localhost:5000/create-user/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...updateData }),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Update Profile');
      });
  };

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    createDBUser(data);
  };

  return (
    <div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        className="flex justify-center pt-2  pb-20"
      >
        <div className="card w-[500px] shadow-2xl bg-slate-500 hover:shadow-inner">
          <div className="card-body ">
            <h2 className="text-center text-3xl font-extrabold">SignUp</h2>

            <form className="ml-14" onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
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
              {/* Address */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Address is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                  {errors.address?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Phone */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="phone"
                  placeholder="Phone Number"
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
                  {errors.phone?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Nid NUmber */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">NID No</span>
                </label>
                <input
                  type="number"
                  placeholder="NID  Number"
                  className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
                  {...register('nid', {
                    // required: {
                    //   value: true,
                    //   message: "NID is Required",
                    // },
                  })}
                />
                <label className="label">
                  {errors.nid?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.nid.message}
                    </span>
                  )}
                  {errors.nid?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.nid.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Email */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
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
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn btn-orange-500 w-full text-white  max-w-xs"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small>
                Already Have an Account ?{' '}
                <Link to="/login" className="text-orange-500">
                  Please Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
