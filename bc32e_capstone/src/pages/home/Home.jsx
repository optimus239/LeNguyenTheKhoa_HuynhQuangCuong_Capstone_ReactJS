import React from "react";
import Header from "../../components/Organisms/Header";
import MovieList from "../../components/Organisms/movieList/MovieList";
import CarouselMovie from "../../components/Organisms/CarouselMovie";
import Cinemas from "../../components/Organisms/Cinemas";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <CarouselMovie />
      <MovieList />
      <Cinemas />
    </div>
  );
};

export default Home;
