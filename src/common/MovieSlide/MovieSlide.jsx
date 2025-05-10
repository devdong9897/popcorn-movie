import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlide.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ title, movies }) => {
  return (
    <div className="py-8 px-4 sm:px-8 bg-gray-900 text-white">
      {/* 제목 */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-100">
        {title}
      </h2>

      {/* 슬라이드 */}
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        className="movie-slider"
      >
        {movies.map((movie, index) => (
          <div key={index} className="flex justify-center">
            <MovieCard movie={movie} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
