import React, { useEffect, useState } from "react";
import { fetchMoviesByGenre } from "../../apis/movieApi";
import { ShowLists } from "../ui";
import { Genre, Movies } from "../../contexts/MovieProvider";

interface MovieListProps {
  genre: Genre;
}

const MovieList: React.FC<MovieListProps> = ({ genre }) => {
  const [movies, setMovies] = useState<Movies[]>([]);
  useEffect(() => {
    getMovieByGenre();
  }, []);
  const getMovieByGenre = async () => {
    const res = await fetchMoviesByGenre(genre.id, 1);
    setMovies(res.results);
  };
  return (
    <div>
      <ShowLists
        movies={movies}
        catTitle={genre.name}
        movieListRouteByCat={`${genre.name}-movie-list`}
      />
    </div>
  );
};

export default MovieList;
