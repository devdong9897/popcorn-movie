import React from "react";
import Banner from "./components/Banner/Banner";
import NowPlaySlide from "./components/MovieNowPlaySlide/NowPlaySlide";
import PopularSlide from "./components/MoviePopularSlide/PopularSlide";
import TopRatedSlide from "./components/MovieTopRatedSlide/TopRatedSlide";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <NowPlaySlide />
      <PopularSlide />
      <TopRatedSlide />
    </div>
  );
};

export default HomePage;
