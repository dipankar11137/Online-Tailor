import React, { useEffect, useState } from 'react';
import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import ShowReview from '../Home/OurServices/Review/ShowReview';
import AddReview from '../Review/AddReview';

const NeedsATailor = ({ tailor }) => {
  const [arrow, setArrow] = useState(false);
  const [review, setReview] = useState(false);
  const navigator = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/review/${tailor?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, [reviews, tailor?.email]);

  const handleBook = id => {
    navigator(`/bookService/${id}`);
  };

  const openModal = () => {
    setReview(true);
  };

  const closeModal = () => {
    setReview(false);
  };

  return (
    <div>
      <div className="card bg-lime-100 text-black shadow-2xl hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            src={tailor?.img}
            alt=""
            style={{ height: '210px' }}
          />
        </figure>
        <div className="p-2">
          <h2 className="card-title font-bold text-2xl">{tailor?.name}</h2>
          <p>{tailor?.address}</p>
          <h2 className="mt-1">
            Salary : <span className="font-bold">{tailor?.salary} BDT</span> /
            Per Day
          </h2>
          <p>{tailor.description}</p>
          <p>Phone : {tailor?.number}</p>
        </div>

        {/* book */}
        <div className="flex items-center justify-between p-1">
          <div>
            <button
              onClick={() => handleBook(tailor._id)}
              className="btn font-bold btn-sm text-white w-full"
            >
              Book Now
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <button
              onClick={openModal}
              className="btn font-bold btn-primary btn-xs text-white"
            >
              Add Review
            </button>

            {arrow ? (
              <button onClick={() => setArrow(false)}>
                <BiUpArrowCircle className="text-2xl font-bold mr-1 text-primary" />
              </button>
            ) : (
              <button onClick={() => setArrow(true)}>
                <BiDownArrowCircle className="text-2xl font-bold mr-1 text-primary" />
              </button>
            )}
          </div>
        </div>

        {/* show review */}
        {arrow && (
          <div>
            {reviews.map(review => (
              <ShowReview key={review._id} review={review}></ShowReview>
            ))}
          </div>
        )}
      </div>

      {/* Add Review Modal */}
      {review && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-700 p-0 rounded-lg shadow-lg max-w-md w-full relative">
            <AddReview
              tailorEmail={tailor?.email}
              setReview={setReview}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NeedsATailor;
