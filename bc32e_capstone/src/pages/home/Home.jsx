import React from "react";
import MovieList from "../../layouts/movieList/MovieList";
import CarouselMovie from "../../layouts/carousel/CarouselMovie";
import Cinemas from "../../layouts/cinemas/Cinemas";

const Home = () => {
  return (
    <div className="container max-w-full">
      <CarouselMovie />
      <MovieList />
      <Cinemas />
    </div>
  );
};

export default Home;
