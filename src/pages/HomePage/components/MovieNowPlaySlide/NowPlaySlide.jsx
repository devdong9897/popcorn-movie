import React from "react";
import { useMovieNowPlayQuery } from "../../../../hook/useMovieNowPlay";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "./NowPlaySlide.css";

const NowPlaySlide = () => {
  const { data, isLoading, isError, error } = useMovieNowPlayQuery();
  console.log("ddd", data);

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
      <MovieSlide title="NowPlay Movies" movies={data.results} />
    </div>
  );
};

export default NowPlaySlide;
