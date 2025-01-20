import React, { useEffect, useState } from "react";
import "./Banner.css";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useMovieVideoQuery } from "../../../../hook/useMovieVideo";
import { useMovieNowPlayQuery } from "../../../../hook/useMovieNowPlay";

const Banner = () => {
  const { data, isLoading, isError, error } = useMovieNowPlayQuery();
  const [showTrailer, setShowTrailer] = useState(false);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    if (data?.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * data?.results.length);
      setRandomMovie(data.results[randomIndex]);
    }
  }, [data]);

  // 영화 이미지 랜덤

  const movieId = randomMovie?.id;

  // 영화 예고편
  const { data: videoData } = useMovieVideoQuery(movieId);

  const movieVideoKey = videoData?.results[0]?.key;

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

  const handleShowTrailer = () => {
    setShowTrailer(true);
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w1280${randomMovie?.backdrop_path}` +
          ")",
      }}
    >
      {!showTrailer && (
        <div className="content">
          <h1>{randomMovie?.title}</h1>
          <p>{randomMovie?.overview}</p>
          <button onClick={handleShowTrailer}>예고편 보기</button>
        </div>
      )}

      {showTrailer && movieVideoKey && (
        <div className="trailer-container">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${movieVideoKey}?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&mute=1`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={() => setShowTrailer(false)}>X</button>
        </div>
      )}
    </div>
  );
};

export default Banner;
