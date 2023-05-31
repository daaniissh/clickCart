import { useState } from "react";

const StarRating = ({ rating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const handleMouseEnter = (star) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="inline-flex  items-center">
      {stars.map((star) => (
        <svg
          key={star}
          className={`h-6 w-6 fill-current ${
            star <= (hoverRating || rating) ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          <path
            d="M10 1l2.583 6.847h6.632l-5.364 4.352 1.96 6.62L10 15.215l-5.811 4.604 1.96-6.62L1.785 7.847h6.632L10 1z"
            fillRule="evenodd"
          />
        </svg>
      ))}
      <span className="ml-2">{rating}</span>
    </div>
  );
};

export default StarRating;
