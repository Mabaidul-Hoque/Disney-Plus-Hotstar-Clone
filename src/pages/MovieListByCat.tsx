// import React from "react";

import { useParams } from "react-router-dom";
import { useMovieData } from "../contexts/MovieProvider";
import { MovieList } from "../components/ui";

const MovieListByCat = () => {
  const { catID } = useParams();
  const { displayLists } = useMovieData();

  //   console.log("catID-->", catID);

  return (
    <>
      {/* LATEST MOVIE LIST */}
      {catID === "latest-movie-list" && (
        <MovieList
          catTitle="Latest Movies"
          movies={displayLists.latestMovies}
        />
      )}
      {/* ACTION MOVIE LIST */}
      {catID === "action-movie-list" && (
        <MovieList
          catTitle="Action Movies"
          movies={displayLists.actionMovies}
        />
      )}

      {/* KIDS TV SERIES SECTION */}
      {catID === "kids-tv-series-list" && (
        <MovieList catTitle="Kids" movies={displayLists.kidsShows} />
      )}
      {/* ROMANTIC MOVIE LIST */}
      {catID === "romantic-movie-list" && (
        <MovieList
          catTitle="Romantic Movies"
          movies={displayLists.romanticMovies}
        />
      )}
      {/* SCIENCE FICTION MOVIE LIST */}
      {catID === "sciFi-movie-list" && (
        <MovieList
          catTitle="Scinece Fiction Movies"
          movies={displayLists.sciFiMovies}
        />
      )}

      {/* COMEDY TV SERIES SECTION */}
      {catID === "comedy-tv-series-list" && (
        <MovieList
          catTitle="Comedy TV Series"
          movies={displayLists.comedyTVSeries}
        />
      )}

      {/* CRIME TV SERIES SECTION */}
      {catID === "crime-tv-series-list" && (
        <MovieList
          catTitle="Crime TV Series"
          movies={displayLists.crimeTVSeries}
        />
      )}

      {/* NEWS TV SERIES SECTION */}
      {catID === "news-tv-series-list" && (
        <MovieList catTitle="News" movies={displayLists.news} />
      )}
    </>
  );
};

export default MovieListByCat;
