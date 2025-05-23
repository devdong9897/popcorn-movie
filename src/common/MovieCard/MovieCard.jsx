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
      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 z-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg mb-3 text-center">
          {movie.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3 justify-center max-h-24 overflow-y-auto">
          {/* max-h-24로 최대 높이 제한, overflow-y-auto로 스크롤 가능하게 설정 */}
          {showGenre(movie.genre_ids)
            .slice(0, 4)
            .map((id, index) => (
              <Badge
                bg="danger"
                key={index}
                className="text-xs sm:text-sm px-3 py-1 rounded-full"
              >
                {id}
              </Badge>
            ))}
          {showGenre(movie.genre_ids).length > 4 && (
            <div className="text-xs text-white mt-2">
              + {showGenre(movie.genre_ids).length - 4} more
            </div>
          )}
        </div>

        <div className="text-lg text-white mb-2 flex items-center justify-center">
          {" "}
          {/* mb-4 -> mb-2로 변경 */}
          <span className="font-semibold mr-2">평점:</span>
          <span className="text-yellow-400 font-bold">
            {Math.floor(movie.vote_average)}
          </span>
        </div>

        <button
          onClick={handleClick}
          className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          상세보기
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
