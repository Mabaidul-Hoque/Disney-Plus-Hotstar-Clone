// import React from "react";

import { useParams } from "react-router-dom";
import { Movies, useMovieData } from "../contexts/MovieProvider";
import { ListDisplayByCat } from "../components/ui";
import { useEffect, useState } from "react";
import { fetchMoviesByGenre } from "../apis/movieApi";

const ShowListByCat = () => {
  const { catID } = useParams();
  const { displayLists, movieGenres } = useMovieData();
  const [genre, seGenre] = useState({ id: "", name: "" });
  const [movies, setMovies] = useState<Movies[]>([]);

  // console.log("catID-->", catID);

  useEffect(() => {
    for (let key in movieGenres) {
      if (`${movieGenres[key].name}-movie-list` === catID) {
        seGenre(movieGenres[key]);
        break;
      }
    }

    getMovieByGenre();
  }, []);
  console.log("genre", genre.name);
  const getMovieByGenre = async () => {
    const res = await fetchMoviesByGenre(genre.id, 1);
    console.log("res from showlistby cat", res);

    setMovies(res.results);
  };
  return (
    <>
      {/* LATEST MOVIE LIST */}
      {catID === "latest-movie-list" && (
        <ListDisplayByCat
          catTitle="Latest Movies"
          movies={displayLists.latestMovies}
        />
      )}
      {/* ACTION MOVIE LIST */}
      {catID === "action-movie-list" && (
        <ListDisplayByCat
          catTitle="Action Movies"
          movies={displayLists.actionMovies}
        />
      )}

      {/* KIDS TV SERIES SECTION */}
      {catID === "kids-tv-series-list" && (
        <ListDisplayByCat catTitle="Kids" movies={displayLists.kidsShows} />
      )}
      {/* ROMANTIC MOVIE LIST */}
      {catID === "romantic-movie-list" && (
        <ListDisplayByCat
          catTitle="Romantic Movies"
          movies={displayLists.romanticMovies}
        />
      )}
      {/* SCIENCE FICTION MOVIE LIST */}
      {catID === "sciFi-movie-list" && (
        <ListDisplayByCat
          catTitle="Scinece Fiction Movies"
          movies={displayLists.sciFiMovies}
        />
      )}

      {/* COMEDY TV SERIES SECTION */}
      {catID === "comedy-tv-series-list" && (
        <ListDisplayByCat
          catTitle="Comedy TV Series"
          movies={displayLists.comedyTVSeries}
        />
      )}

      {/* CRIME TV SERIES SECTION */}
      {catID === "crime-tv-series-list" && (
        <ListDisplayByCat
          catTitle="Crime TV Series"
          movies={displayLists.crimeTVSeries}
        />
      )}

      {/* NEWS TV SERIES SECTION */}
      {catID === "news-tv-series-list" && (
        <ListDisplayByCat catTitle="News" movies={displayLists.news} />
      )}

      {/* MOVIES LIST SHOW BY CAT WHICH IS COMING THROUGH GENRE */}
      {catID === `${genre.name}-movie-list` && (
        <ListDisplayByCat catTitle={genre.name} movies={movies} />
      )}
    </>
  );
};

export default ShowListByCat;
