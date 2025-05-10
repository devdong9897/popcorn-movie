import React from "react";
import "./MovieReview.css";
import { useParams } from "react-router-dom";
import { useMovieReviewQuery } from "../../../../hook/useMovieReviews";

const MovieReview = () => {
  const { id } = useParams();
  const { data } = useMovieReviewQuery(id);

  const cleanReviewContent = (content) => {
    if (content) {
      return content.replace(/<[^>]*>/g, "");
    }
    return "";
  };

  const review = data?.results[0];

  return (
    <div className="movie-review py-8 px-4 sm:px-8 bg-gray-800 text-white">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">리뷰</h3>

      {review ? (
        <div className="reviews bg-gray-700 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h4 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
            {review.author}
          </h4>
          <p className="text-base sm:text-lg text-gray-300">
            {cleanReviewContent(review.content)}
          </p>
        </div>
      ) : (
        <p className="text-lg text-gray-400">리뷰가 없습니다.</p>
      )}
    </div>
  );
};

export default MovieReview;
