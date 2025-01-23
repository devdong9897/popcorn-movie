import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useMoviePopularQuery } from "../../../../hook/useMoviePopular";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";

const PopularSlide = () => {
  const { data, isLoading, isError, error } = useMoviePopularQuery();

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
      <MovieSlide title="Popular Movies" movies={data.results} />
    </div>
  );
};

export default PopularSlide;
