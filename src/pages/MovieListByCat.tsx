// import React from "react";

import { useParams } from "react-router-dom";
import { useMovieData } from "../contexts/MovieProvider";
import { MovieList } from "../components/ui";

const MovieListByCat = () => {
  const { catID } = useParams();
  const { latestMovies, actionMovies, romanticMovies } = useMovieData();

  //   console.log("catID-->", catID);

  return (
    <>
      {/* LATEST MOVIE LIST */}
      {catID === "latest-movie-list" && (
        <MovieList catTitle="Latest Movies" movies={latestMovies} />
      )}
      {/* ACTION MOVIE LIST */}
      {catID === "action-movie-list" && (
        <MovieList catTitle="Action Movies" movies={actionMovies} />
      )}
      {/* ROMANTIC MOVIE LIST */}
      {catID === "romantic-movie-list" && (
        <MovieList catTitle="Romantic Movies" movies={romanticMovies} />
      )}
    </>
  );
};

export default MovieListByCat;
