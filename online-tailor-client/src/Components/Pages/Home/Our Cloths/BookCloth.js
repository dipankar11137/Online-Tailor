import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const BookCloth = () => {
  const { id } = useParams();
    const [user] = useAuthState(auth);
  const [products, setProduct] = useState({})
  const [formType, setFormType] = useState('shirt');
  
   useEffect(() => {
     fetch(`http://localhost:5000/productsId/${id}`)
       .then(res => res.json())
       .then(data => setProduct(data));
   }, [id]);
  
   const today = new Date();

   // Format the date as DD/MM/YYYY
   const currentDate = today.toLocaleDateString('en-GB', {
     day: '2-digit',
     month: '2-digit',
     year: 'numeric',
   });
 
     const {
       register,
       handleSubmit,
       formState: { errors },
       reset,
     } = useForm();

     // Handle form submit
  const onSubmit = data => {
         const customerName = user?.displayName;
         const email = user?.email;
      const updateData = {
        ...data,
        products,
      date:currentDate,
        customerName: customerName,
        email: email,
      };
      // console.log(updateData);
      const url = `http://localhost:5000/bookProducts`;
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then(res => res.json())
        .then(result => {
          toast.success('Successfully Book This Product');
          reset();
        });
     };
 
  return (
    <div className="flex gap-20 justify-center items-center">
      <div className="bg">
        <img className="h-44 rounded-lg" src={products?.img} alt="" />
        <h1 className='text-2xl text-center mt-5'>{products?.name}</h1>
        <h1 className='text-2xl text-center '>BDT {products?.price} </h1>
      </div>

      <div className="flex flex-col items-center min-h-screen ">
        <h2 className="text-2xl font-bold text-center mt-6 mb-4">
          Measurement Form
        </h2>

        {/* Buttons to select type of form */}
        <div className="flex gap-4 mb-6">
          <button
            className={`btn ${
              formType === 'shirt' ? 'btn-primary' : 'btn-outline'
            } `}
            onClick={() => setFormType('shirt')}
          >
            Shirt
          </button>
          <button
            className={`btn ${
              formType === 'pant' ? 'btn-primary' : 'btn-outline'
            } `}
            onClick={() => setFormType('pant')}
          >
            Pant
          </button>
          <button
            className={`btn ${
              formType === 'threepieces' ? 'btn-primary' : 'btn-outline'
            } `}
            onClick={() => setFormType('threepieces')}
          >
            Three-pieces
          </button>
        </div>

        {/* Form rendering based on button click */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-100 p-6 rounded shadow-md max-w-xl w-full"
        >
          {/* Shirt Measurement Form */}
          {formType === 'shirt' && (
            <>
              <h3 className="text-lg font-semibold mb-4">Shirt Measurements</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Neck */}
                <div>
                  <label className="block text-gray-700">Neck (inches):</label>
                  <input
                    type="number"
                    placeholder="Neck"
                    className="input input-bordered w-full"
                    {...register('neck', {
                      required: 'Neck measurement is required',
                      min: {
                        value: 10,
                        message: 'Neck size must be at least 10 inches',
                      },
                      max: {
                        value: 24,
                        message: 'Neck size must be less than 24 inches',
                      },
                    })}
                  />
                  {errors.neck && (
                    <p className="text-red-500 text-sm">
                      {errors.neck.message}
                    </p>
                  )}
                </div>

                {/* Chest */}
                <div>
                  <label className="block text-gray-700">Chest (inches):</label>
                  <input
                    type="number"
                    placeholder="Chest"
                    className="input input-bordered w-full"
                    {...register('chest', {
                      required: 'Chest measurement is required',
                      min: {
                        value: 20,
                        message: 'Chest size must be at least 20 inches',
                      },
                      max: {
                        value: 60,
                        message: 'Chest size must be less than 60 inches',
                      },
                    })}
                  />
                  {errors.chest && (
                    <p className="text-red-500 text-sm">
                      {errors.chest.message}
                    </p>
                  )}
                </div>

                {/* Shoulder */}
                <div>
                  <label className="block text-gray-700">
                    Shoulder (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Shoulder"
                    className="input input-bordered w-full"
                    {...register('shoulder', {
                      required: 'Shoulder measurement is required',
                      min: {
                        value: 12,
                        message: 'Shoulder size must be at least 12 inches',
                      },
                      max: {
                        value: 25,
                        message: 'Shoulder size must be less than 25 inches',
                      },
                    })}
                  />
                  {errors.shoulder && (
                    <p className="text-red-500 text-sm">
                      {errors.shoulder.message}
                    </p>
                  )}
                </div>

                {/* Sleeve Length */}
                <div>
                  <label className="block text-gray-700">
                    Sleeve Length (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Sleeve Length"
                    className="input input-bordered w-full"
                    {...register('sleeve', {
                      required: 'Sleeve length is required',
                      min: {
                        value: 15,
                        message: 'Sleeve length must be at least 15 inches',
                      },
                      max: {
                        value: 40,
                        message: 'Sleeve length must be less than 40 inches',
                      },
                    })}
                  />
                  {errors.sleeve && (
                    <p className="text-red-500 text-sm">
                      {errors.sleeve.message}
                    </p>
                  )}
                </div>

                {/* Waist */}
                <div>
                  <label className="block text-gray-700">Waist (inches):</label>
                  <input
                    type="number"
                    placeholder="Waist"
                    className="input input-bordered w-full"
                    {...register('waist', {
                      required: 'Waist measurement is required',
                      min: {
                        value: 20,
                        message: 'Waist size must be at least 20 inches',
                      },
                      max: {
                        value: 50,
                        message: 'Waist size must be less than 50 inches',
                      },
                    })}
                  />
                  {errors.waist && (
                    <p className="text-red-500 text-sm">
                      {errors.waist.message}
                    </p>
                  )}
                </div>

                {/* Shirt Length */}
                <div>
                  <label className="block text-gray-700">
                    Shirt Length (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Shirt Length"
                    className="input input-bordered w-full"
                    {...register('shirtLength', {
                      required: 'Shirt length is required',
                      min: {
                        value: 20,
                        message: 'Shirt length must be at least 20 inches',
                      },
                      max: {
                        value: 50,
                        message: 'Shirt length must be less than 50 inches',
                      },
                    })}
                  />
                  {errors.shirtLength && (
                    <p className="text-red-500 text-sm">
                      {errors.shirtLength.message}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Pant Measurement Form */}
          {formType === 'pant' && (
            <>
              <h3 className="text-lg font-semibold my-4">Pants Measurements</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Pants Waist */}
                <div>
                  <label className="block text-gray-700">
                    Pants Waist (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Pants Waist"
                    className="input input-bordered w-full"
                    {...register('pantsWaist', {
                      required: 'Pants waist measurement is required',
                      min: {
                        value: 20,
                        message: 'Pants waist must be at least 20 inches',
                      },
                      max: {
                        value: 50,
                        message: 'Pants waist must be less than 50 inches',
                      },
                    })}
                  />
                  {errors.pantsWaist && (
                    <p className="text-red-500 text-sm">
                      {errors.pantsWaist.message}
                    </p>
                  )}
                </div>

                {/* Hip */}
                <div>
                  <label className="block text-gray-700">Hip (inches):</label>
                  <input
                    type="number"
                    placeholder="Hip"
                    className="input input-bordered w-full"
                    {...register('pantsHip', {
                      required: 'Hip measurement is required',
                      min: {
                        value: 30,
                        message: 'Hip size must be at least 30 inches',
                      },
                      max: {
                        value: 60,
                        message: 'Hip size must be less than 60 inches',
                      },
                    })}
                  />
                  {errors.pantsHip && (
                    <p className="text-red-500 text-sm">
                      {errors.pantsHip.message}
                    </p>
                  )}
                </div>

                {/* Inseam */}
                <div>
                  <label className="block text-gray-700">
                    Inseam (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Inseam"
                    className="input input-bordered w-full"
                    {...register('pantsInseam', {
                      required: 'Inseam measurement is required',
                      min: {
                        value: 25,
                        message: 'Inseam must be at least 25 inches',
                      },
                      max: {
                        value: 40,
                        message: 'Inseam must be less than 40 inches',
                      },
                    })}
                  />
                  {errors.pantsInseam && (
                    <p className="text-red-500 text-sm">
                      {errors.pantsInseam.message}
                    </p>
                  )}
                </div>

                {/* Outseam */}
                <div>
                  <label className="block text-gray-700">
                    Outseam (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Outseam"
                    className="input input-bordered w-full"
                    {...register('pantsOutseam', {
                      required: 'Outseam measurement is required',
                      min: {
                        value: 30,
                        message: 'Outseam must be at least 30 inches',
                      },
                      max: {
                        value: 50,
                        message: 'Outseam must be less than 50 inches',
                      },
                    })}
                  />
                  {errors.pantsOutseam && (
                    <p className="text-red-500 text-sm">
                      {errors.pantsOutseam.message}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Three-pieces Measurement Form */}
          {formType === 'threepieces' && (
            <>
              <h3 className="text-lg font-semibold mb-4">
                Three-pieces Measurements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Bust */}
                <div>
                  <label className="block text-gray-700">Bust (inches):</label>
                  <input
                    type="number"
                    placeholder="Bust"
                    className="input input-bordered w-full"
                    {...register('bust', {
                      required: 'Bust measurement is required',
                      min: {
                        value: 28,
                        message: 'Bust size must be at least 28 inches',
                      },
                      max: {
                        value: 50,
                        message: 'Bust size must be less than 50 inches',
                      },
                    })}
                  />
                  {errors.bust && (
                    <p className="text-red-500 text-sm">
                      {errors.bust.message}
                    </p>
                  )}
                </div>

                {/* Waist */}
                <div>
                  <label className="block text-gray-700">Waist (inches):</label>
                  <input
                    type="number"
                    placeholder="Waist"
                    className="input input-bordered w-full"
                    {...register('waist', {
                      required: 'Waist measurement is required',
                      min: {
                        value: 20,
                        message: 'Waist size must be at least 20 inches',
                      },
                      max: {
                        value: 50,
                        message: 'Waist size must be less than 50 inches',
                      },
                    })}
                  />
                  {errors.waist && (
                    <p className="text-red-500 text-sm">
                      {errors.waist.message}
                    </p>
                  )}
                </div>

                {/* Hip */}
                <div>
                  <label className="block text-gray-700">Hip (inches):</label>
                  <input
                    type="number"
                    placeholder="Hip"
                    className="input input-bordered w-full"
                    {...register('hip', {
                      required: 'Hip measurement is required',
                      min: {
                        value: 30,
                        message: 'Hip size must be at least 30 inches',
                      },
                      max: {
                        value: 55,
                        message: 'Hip size must be less than 55 inches',
                      },
                    })}
                  />
                  {errors.hip && (
                    <p className="text-red-500 text-sm">{errors.hip.message}</p>
                  )}
                </div>

                {/* Shoulder */}
                <div>
                  <label className="block text-gray-700">
                    Shoulder (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Shoulder"
                    className="input input-bordered w-full"
                    {...register('shoulder', {
                      required: 'Shoulder measurement is required',
                      min: {
                        value: 10,
                        message: 'Shoulder size must be at least 10 inches',
                      },
                      max: {
                        value: 22,
                        message: 'Shoulder size must be less than 22 inches',
                      },
                    })}
                  />
                  {errors.shoulder && (
                    <p className="text-red-500 text-sm">
                      {errors.shoulder.message}
                    </p>
                  )}
                </div>

                {/* Length */}
                <div>
                  <label className="block text-gray-700">
                    Length (inches):
                  </label>
                  <input
                    type="number"
                    placeholder="Length"
                    className="input input-bordered w-full"
                    {...register('length', {
                      required: 'Length measurement is required',
                      min: {
                        value: 30,
                        message: 'Length must be at least 30 inches',
                      },
                      max: {
                        value: 60,
                        message: 'Length must be less than 60 inches',
                      },
                    })}
                  />
                  {errors.length && (
                    <p className="text-red-500 text-sm">
                      {errors.length.message}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary w-full mt-4">
            Submit Measurements
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookCloth;