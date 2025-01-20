import React from "react";
import "./MovieDetailPage.css";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hook/useMovieDetail";
import MovieDetailTitle from "./components/DetailTitle/MovieDetailTitle";
import { useMovieVideoQuery } from "../../hook/useMovieVideo";
import MovieTrailer from "./components/MovieTrailer/MovieTrailer";
import MovieReview from "./components/MovieReview/MovieReview";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log("detail", data);

  const { data: movieVideo } = useMovieVideoQuery(id);
  const movieVideoKey = movieVideo?.results[0]?.key;

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
    <div className="movie-detail">
      <MovieDetailTitle movie={data} />
      <MovieTrailer movieVideo={movieVideoKey} />
      <MovieReview />
    </div>
  );
};

export default MovieDetailPage;
