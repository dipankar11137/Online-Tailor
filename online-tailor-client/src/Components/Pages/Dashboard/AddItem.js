import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {
  const imageHostKey = '39899c0cdbfbe66a2dbde3818a91832c';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        const changeUrl = { ...data, img: image };
        console.log(changeUrl);

        fetch(`http://localhost:5000/products`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(changeUrl),
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Successfully Add This ');
            reset();
          });
      });
  };
  return (
    <div className="pb-20 text-black">
      <h2 className="mt-5 text-center font-bold text-4xl text-orange-500 uppercase">
        Add A Product
      </h2>

      <div className="mt-5 mx-auto p-8 max-w-4xl bg-slate-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
        <form
          className="grid grid-cols-1 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Service name"
              className="input input-bordered w-full bg-white hover:shadow-xl shadow-inner border-blue-900 rounded-lg"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            {errors.name?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors?.name?.message}
              </span>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Image</span>
            </label>
            <input
              type="file"
              className="file-input w-full hover:shadow-xl shadow-inner border-blue-900 rounded-lg"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />
            {errors.image?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors?.image?.message}
              </span>
            )}
          </div>

          {/* Salary */}
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full bg-white hover:shadow-xl shadow-inner border-blue-900 rounded-lg"
              {...register('price', {
                required: {
                  value: true,
                  message: 'Price is Required',
                },
              })}
            />
            {errors.price?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors?.price?.message}
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Service Description"
              className="textarea input-bordered w-full bg-white h-24 hover:shadow-xl shadow-inner border-blue-900 rounded-lg"
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is Required',
                },
              })}
            />
            {errors.description?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors?.description?.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div>
           
              <input
                className="btn btn-primary w-full mt-4 text-white"
                type="submit"
                value="Add"
              />
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
