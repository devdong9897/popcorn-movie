import React from "react";
import { useMovieNowPlayQuery } from "../../../../hook/useMovieNowPlay";
import MovieSlide from "../../../../common/MovieSlide/MovieSlide";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "./NowPlaySlide.css";

const NowPlaySlide = () => {
  const { data, isLoading, isError, error } = useMovieNowPlayQuery();
  console.log("now", data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
          className="text-red-500"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Alert
          variant="danger"
          className="text-center px-6 py-4 rounded-lg shadow-lg bg-red-600 text-white"
        >
          {error.message}
        </Alert>
      </div>
    );
  }
  return (
    <div className="py-8 px-4 sm:px-8 bg-gray-800 text-white">
      <MovieSlide title="NowPlay Movies" movies={data.results} />
    </div>
  );
};

export default NowPlaySlide;
