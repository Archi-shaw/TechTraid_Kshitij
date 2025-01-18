"use client"
import React, { useState } from "react";

const Reviews = () => {
  // State for the rating system
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([
    { name: "John Doe", date: "Jan 15, 2025", text: "Great vendor!" },
    { name: "Jane Smith", date: "Jan 14, 2025", text: "Could improve support." },
  ]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && reviewText.trim() !== "") {
      setSubmittedReviews([
        ...submittedReviews,
        { name: "Anonymous", date: new Date().toDateString(), text: reviewText },
      ]);
      setRating(0);
      setReviewText("");
    } else {
      alert("Please provide a rating and a review!");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Header */}
      <header className="p-6 text-center text-2xl font-extrabold text-gray-700">
        Reviews and Rating
      </header>

      {/* Vendor Overview Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Vendor Overview
        </h2>
        <div className="flex items-center space-x-6">
          {/* Circle Placeholder */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            Logo
          </div>

          {/* Average Rating */}
          <div>
            <p className="text-lg font-bold">Average Rating</p>
            <p className="text-3xl font-extrabold text-yellow-500">3.8</p>
            <p className="text-gray-600">out of 5 global ratings</p>

            {/* Rating Bar */}
            <div className="mt-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center my-1">
                  <span className="w-6 text-right text-sm">{star}</span>
                  <div className="ml-2 mr-2 w-32 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-yellow-400 rounded-full"
                      style={{
                        width: `${star * 10}%`, // Example dynamic width
                      }}
                    ></div>
                  </div>
                  <span className="text-sm">
                    {star === 5 ? 8 : star === 4 ? 10 : star === 3 ? 7 : 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Reviews</h2>

        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          <select className="p-2 border rounded-md">
            <option>Select Category</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
          <select className="p-2 border rounded-md">
            <option>Sort</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>

        {/* Reviews */}
        <div>
          {submittedReviews.map((review, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <div className="flex items-center mb-2">
                {/* Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="ml-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rate Vendor Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Rate Vendor</h2>
        <form onSubmit={handleSubmit}>
          {/* Rating */}
          <div className="flex space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRating(star)}
                className={`text-2xl ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          {/* Review Input */}
          <textarea
            className="w-full p-2 border rounded-md mb-4"
            rows="4"
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Reviews;
