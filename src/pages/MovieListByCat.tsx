// import React from "react";

import { useParams } from "react-router-dom";
import { LatestMovieList } from "../components/Movie-list-by-category";
import { useMovieData } from "../contexts/MovieProvider";

const MovieListByCat = () => {
  const { catID } = useParams();
  const { latestMovies, actionMovies } = useMovieData();

  //   console.log("catID-->", catID);

  return (
    <>
      {/* LATEST MOVIE LIST */}
      {catID === "latest-movie-list" && (
        <LatestMovieList catTitle="Latest Movies" movies={latestMovies} />
      )}
      {/* ACTION MOVIE LIST */}
      {catID === "action-movie-list" && (
        <LatestMovieList catTitle="Action Movies" movies={actionMovies} />
      )}
    </>
  );
};

export default MovieListByCat;
