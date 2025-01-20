import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useMoviePopularQuery } from "../../../../hook/useMoviePopular";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";

const TopRatedSlide = () => {
  const { data, isLoading, isError, error } = useMoviePopularQuery();
  console.log("top", data);

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlide title="TopRated Movies" movies={data.results} />
    </div>
  );
};

export default TopRatedSlide;
