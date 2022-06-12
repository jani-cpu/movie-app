import React, { useEffect, useState } from "react";
import movieApi from "../axios/Axios";
import { APIKEY, ID } from "../axios/ApiKey";
import "./MovieListing.css";
import { Link, useParams } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";

function MovieListing() {
  const [movies, setMovies] = useState(null);
  const { id } = useParams();
  let renderMovies = "";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?i=${ID}&apikey=${APIKEY}&type="movie"&s="harry"`
      );
      setMovies(response.data.Search);
    };
    fetchMovies();
  }, []);

  renderMovies =
    movies &&
    movies.map((item, index) => {
      return <MovieCard key={index} data={item} />;
    });

  return (
    <div className='movie-wraper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieListing;
