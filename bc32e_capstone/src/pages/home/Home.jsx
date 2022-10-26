import React from "react";
import Header from "../../layouts/Header";
import MovieList from "../../layouts/movieList/MovieList";
import Footer from "../../layouts/footer/Footer";
import CarouselMovie from "../../layouts/CarouselMovie";
import Cinemas from "../../layouts/cinemas/Cinemas";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <CarouselMovie />
      <MovieList />
      <Cinemas />
      <Footer />
    </div>
  );
};

export default Home;
