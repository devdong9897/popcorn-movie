import React, { useEffect, useState } from "react";
import "./Banner.css";
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
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full border-4 border-t-4 border-red-500 w-16 h-16"></div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  const handleShowTrailer = () => {
    setShowTrailer(true);
  };

  return (
    <div
      className="relative w-full h-[60vh] sm:h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${randomMovie?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* 텍스트 콘텐츠 */}
      {!showTrailer && (
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center text-center p-4 sm:p-8 z-20">
          {/* 영화 제목 */}
          <h1 className="text-4xl sm:text-6xl text-white font-bold drop-shadow-lg mb-4 sm:mb-6">
            {randomMovie?.title}
          </h1>

          {/* 예고편 버튼 */}
          <button
            onClick={handleShowTrailer}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
            </svg>
            예고편 보기
          </button>
        </div>
      )}

      {/* 예고편 모드 */}
      {showTrailer && movieVideoKey && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 z-30">
          <div className="relative w-full h-full max-w-4xl max-h-[80%] rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${movieVideoKey}?autoplay=1&controls=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&mute=1`}
              title="Movie Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              X
            </button>
          </div>
        </div>
      )}

      {showTrailer && !movieVideoKey && (
        <div className="absolute inset-0 flex justify-center items-center z-30 bg-black bg-opacity-80">
          <p className="text-3xl text-white font-semibold">
            현재 영화는 예고편이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default Banner;
