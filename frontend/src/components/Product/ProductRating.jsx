import React from 'react';

function ProductRating(props) {
  const { rating, numReviews, caption } = props;

  return (
    <div className="ratings__wrapper">
      <div className="ratings">
        <div className="ratings__val">
          {[1, 2, 3, 4, 5].map((index) => (
            <span key={index}>
              <i
                className={
                  rating >= index
                    ? 'las la-star'
                    : rating >= index - 0.5
                    ? 'las la-star-half-alt'
                    : 'lar la-star'
                }
              ></i>
            </span>
          ))}
        </div>
        <span className="ratings__tooltip">{rating.toFixed(2)}</span>
      </div>

      <span className="ratings__text">
        {caption ? <span>{caption}</span> : ''}
        {numReviews ? <span>{`( ${numReviews} Reviews )`}</span> : ''}
      </span>
    </div>
  );
}

export default ProductRating;
