// import React from "react";

import { useParams } from "react-router-dom";
import { LatestMovieList } from "../components/Movie-list-by-category";
import { useMovieData } from "../contexts/MovieProvider";

const MovieListByCat = () => {
  const { catID } = useParams();
  //@ts-ignore
  const { latestMovies, setLatestMovies } = useMovieData();

  //   console.log("catID-->", catID);

  return (
    <>
      {catID === "latest-movie-list" && (
        <LatestMovieList catTitle="Latest Movies" movies={latestMovies} />
      )}
    </>
  );
};

export default MovieListByCat;
