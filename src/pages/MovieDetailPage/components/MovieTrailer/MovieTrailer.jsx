import React from "react";
import "./MovieTrailer.css";

const MovieTrailer = ({ movieVideo }) => {
  return (
    <div className="movie-trailer">
      <h3>예고편</h3>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${movieVideo}?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&mute=1`}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
