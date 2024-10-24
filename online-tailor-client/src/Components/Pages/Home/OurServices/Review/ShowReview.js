import React from 'react';
import StarRating from './StarRating';

const ShowReview = ({ review }) => {
  const rating = review?.rating;

  return (
    <div className="p-2">
      <h1>{review?.review}</h1>
      <div className="flex justify-between items-center">
        <div>
          <StarRating rating={rating} />
        </div>
        <div className="mr-0 flex  items-center font-bold">
          {review?.image ? (
            <img
              className="h-8 w-8 mr-3 rounded-full"
              src={review?.image}
              alt=""
            />
          ) : (
            <img
              className="h-8 mr-3"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914927/man-icon-md.png"
              alt=""
            />
          )}

          <h1>{review?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
