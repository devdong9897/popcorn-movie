import React from "react";
import Badge from "react-bootstrap/Badge";

import "./MovieDetailTitle.css";

const MovieDetailTitle = ({ movie }) => {
  return (
    <div
      className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 p-4 sm:p-8 bg-gray-900 text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        backgroundSize: "cover", // 이미지가 div에 맞게 커지도록 설정
        backgroundPosition: "center", // 중앙 정렬
        backgroundRepeat: "no-repeat", // 이미지 반복 방지
        height: "400px", // 배경 이미지의 높이를 400px로 설정
      }}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* 영화 포스터 */}
      <div className="title-img flex-shrink-0 w-[150px] sm:w-[200px] h-[225px] sm:h-[300px] overflow-hidden rounded-lg shadow-md z-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 영화 정보 */}
      <div className="title-contents flex flex-col gap-2 z-10 relative">
        <h1 className="text-2xl sm:text-3xl font-semibold">{movie.title}</h1>

        {/* 장르 배지 */}
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre, index) => (
            <Badge
              className="text-xs sm:text-sm px-3 py-1 rounded-full"
              bg="danger"
              key={index}
            >
              {genre.name}
            </Badge>
          ))}
        </div>

        {/* 영화 정보 */}
        <div className="text-sm sm:text-base">
          <div className="mb-1">개봉일: {movie.release_date}</div>
          <div className="mb-1">평점: {Math.floor(movie.vote_average)}</div>
          <div className="mb-1">수익: {movie.budget.toLocaleString()}</div>
        </div>

        {/* 줄거리 */}
        <h3 className="text-xl font-semibold mt-4">줄거리</h3>
        <p className="text-sm sm:text-base">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailTitle;
