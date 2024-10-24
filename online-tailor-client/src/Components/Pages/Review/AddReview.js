import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = ({tailorEmail, setReview, closeModal }) => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  //   const name = user?.displayName;
  //   const img = user?.photoURL;

  let img;
  let name;
  if (user?.photoURL == null) {
    img =
      'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png';
  } else {
    img = user?.photoURL;
  }
  if (user?.displayName == null) {
    name = 'Abbus';
  } else {
    name = user?.displayName;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit =async data => {
    const updateData = await { ...data, email:tailorEmail,customerEmail:email, name, img };
    // console.log(updateData);
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Successfully Add Review');
        setReview(false);
        reset();
      });
  };
  return (
    <div className="flex justify-center ">
      <div className=" w-96 bg-slate-700 text-black rounded-lg pt-5 pb-10 ">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-red-600 text-gray-100 hover:text-gray-200   items-center text-2xl pb-[2px] px-[7px] rounded-full font-bold"
          >
            &times;
          </button>
          <label className="label">
            <span className="label-text font-bold text-lime-400 text-2xl">
              Add a Review
            </span>
          </label>
          <div>
            <input
              type="number"
              placeholder="Rating 1-5"
              className="input input-bordered bg-white w-full "
              min="1" // Minimum rating value
              max="5" // Maximum rating value
              {...register('rating', {
                required: {
                  value: true,
                  message: 'Rating is Required',
                },
                min: {
                  value: 1,
                  message: 'Rating must be at least 1',
                },
                max: {
                  value: 5,
                  message: 'Rating must be at most 5',
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.rating?.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Your Review"
              className="input input-bordered bg-white w-full  h-32"
              {...register('review', {
                required: {
                  value: true,
                  message: 'Review is Required',
                },
              })}
            />
            <label className="label">
              {errors.review?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.review?.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn  w-full text-white"
            type="submit"
            value="Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
