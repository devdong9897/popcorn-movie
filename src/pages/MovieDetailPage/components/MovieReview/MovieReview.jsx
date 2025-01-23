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
    <div className="movie-review">
      <h3>리뷰</h3>
      {review ? (
        <div className="reviews">
          <h4>{review.author}</h4>
          <p>{cleanReviewContent(review.content)}</p>
        </div>
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </div>
  );
};

export default MovieReview;
