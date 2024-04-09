// import React from 'react'

import { useEffect } from "react";
import { fetchMovieGenres } from "../apis/genreApi";
import { TopTrendingShows } from "../components/ui";
import { trendingMovies } from "../data/homeMovieDetails";
import { MovieList } from "../components/movies";
import { useMovieData } from "../contexts/MovieProvider";

const Movie = () => {
  // const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const { movieGenres, setMovieGenres } = useMovieData();

  useEffect(() => {
    getMovieGenres();
  }, []);
  const getMovieGenres = async () => {
    const res = await fetchMovieGenres();
    console.log("res from movieGnere", res);
    setMovieGenres(res.genres);
  };
  return (
    <div className="">
      {/* HOME HEADER */}
      <TopTrendingShows shows={trendingMovies} />

      {/* DISPLAY MOVIES BY GENRE */}
      <div>
        {movieGenres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
