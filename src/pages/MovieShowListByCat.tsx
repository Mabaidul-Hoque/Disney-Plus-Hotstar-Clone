import { useEffect, useState } from "react";
import { Movies, useMovieData } from "../contexts/MovieProvider";
import { useParams } from "react-router-dom";
import { fetchMoviesByGenre } from "../apis/movieApi";
import { ListDisplayByCat } from "../components/ui";

const MovieShowListByCat = () => {
  const { catID } = useParams();
  const { genres } = useMovieData();
  const [genre, seGenre] = useState({ id: "", name: "" });
  const [movies, setMovies] = useState<Movies[]>([]);

  console.log("genres", genre);

  useEffect(() => {
    for (let key in genres.movieGenres) {
      if (`${genres.movieGenres[key].name}-movie-list` === catID) {
        seGenre(genres.movieGenres[key]);
        break;
      }
    }

    if (genre.id) {
      getMovieByGenre();
    }
  }, [genre]);

  const getMovieByGenre = async () => {
    const res = await fetchMoviesByGenre(genre.id, 1);
    setMovies(res.results);
  };

  return (
    <div>
      {/* MOVIES LIST SHOW BY CAT WHICH IS COMING THROUGH GENRE */}
      {catID === `${genre.name}-movie-list` && (
        <ListDisplayByCat catTitle={`${genre.name} Movies`} movies={movies} />
      )}
    </div>
  );
};

export default MovieShowListByCat;
