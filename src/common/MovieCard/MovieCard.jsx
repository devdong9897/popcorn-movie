import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.css";
import { useMovieGenreQuery } from "../../hook/useMovieGenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreId) => {
    if (!genreData) return [];
    const genreNameList = genreId.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie?.backdrop_path})`,
      }}
    >
      <div className="overlay">
        <h3>{movie.title}</h3>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge bg="danger" key={index}>
            {id}
          </Badge>
        ))}
        <div>평점: {Math.floor(movie.vote_average)}</div>
        <button onClick={handleClick}>상세보기</button>
      </div>
    </div>
  );
};

export default MovieCard;
