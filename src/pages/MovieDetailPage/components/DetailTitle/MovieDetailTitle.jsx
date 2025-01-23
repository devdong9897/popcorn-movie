import React from "react";
import Badge from "react-bootstrap/Badge";

import "./MovieDetailTitle.css";

const MovieDetailTitle = ({ movie }) => {
  return (
    <div className="detail-title">
      <div className="title-img">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="title-contents">
        <h1>{movie.title}</h1>
        {movie.genres.map((genre, index) => (
          <Badge className="badge" bg="danger" key={index}>
            {genre.name}
          </Badge>
        ))}
        <div className="contents-detail">
          <span>개봉일: {movie.release_date}</span>
        </div>
        <div>
          <span>평점: {Math.floor(movie.vote_average)}</span>
        </div>
        <div>
          <span>수익: {movie.budget.toLocaleString()}</span>
        </div>
        <h3>줄거리</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailTitle;
