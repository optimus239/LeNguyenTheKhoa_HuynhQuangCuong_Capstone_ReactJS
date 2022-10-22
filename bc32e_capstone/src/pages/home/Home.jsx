import React from "react";
import Header from "../../components/Organisms/Header";
import MovieList from "../../components/Organisms/MovieList";
import Slider from "../../components/Organisms/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <MovieList />
    </div>
  );
};

export default Home;
