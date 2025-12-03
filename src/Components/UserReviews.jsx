import React, { useState } from "react";

// Example reviews data
const initialReviews = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    comment: "Amazing app! Very user-friendly and intuitive.",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    comment: "Great features, but could use a few improvements.",
  },
  {
    id: 3,
    name: "Catherine Lee",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    comment: "Absolutely love it! Highly recommend to everyone.",
  },
];

// Star Rating Component
const Stars = ({ rating }) => {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-current" : "text-gray-300"}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.757 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const UserReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [loading, setLoading] = useState(false);

  const loadMoreReviews = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const moreReviews = [
        {
          id: reviews.length + 1,
          name: "David Miller",
          avatar: `https://i.pravatar.cc/100?img=${reviews.length + 4}`,
          rating: 4,
          comment: "Nice app, smooth experience!",
        },
        {
          id: reviews.length + 2,
          name: "Emily Davis",
          avatar: `https://i.pravatar.cc/100?img=${reviews.length + 5}`,
          rating: 5,
          comment: "Fantastic! Really impressed by the design.",
        },
      ];
      setReviews([...reviews, ...moreReviews]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-primary flex justify-center my-5 gap-3">
        User Reviews
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <Stars rating={review.rating} />
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={loadMoreReviews}
          disabled={loading}
          className="btn btn-wide  text-white hover:shadow-xl bg-gradient-to-tl to-[#632EE3] from-[#9F62F2]"
        >
          {loading ? "Loading..." : "Load More Reviews"}
        </button>
      </div>
    </div>
  );
};

export default UserReviews;
