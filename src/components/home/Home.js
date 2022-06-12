import React from "react";
import MovieListing from "../movieListing/MovieListing";
import "./Home.css";

function Home() {
  return (
    <div className='home-container'>
      <MovieListing />
    </div>
  );
}

export default Home;
