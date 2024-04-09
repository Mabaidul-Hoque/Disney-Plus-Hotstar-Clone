import React, { useState } from "react";
import { Movies } from "../../contexts/MovieProvider";
import { DisplayedMovies } from ".";

interface LatestMovieListProps {
  catTitle: string;
  movies: Movies[];
}
const LatestMovieList: React.FC<LatestMovieListProps> = ({
  catTitle,
  movies,
}) => {
  const [moviePoster, setMoviePoster] = useState("");

  return (
    <div
      className="px-2 sm:px-20 md:px-4 lg:px-20 xl:px-24"
      style={{ backgroundImage: `url(${moviePoster})` }}
    >
      <h1
        className="text-6xl font-semibold font-mono italic tracking-widest text-center py-10 pt-40"
        style={{
          background: "linear-gradient(to bottom, #39ECE6, #8539EC)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {catTitle}
      </h1>

      {/* ALL MOVIES */}
      <div className="flex items-center flex-wrap justify-between gap-6 py-10">
        {movies &&
          movies.map((movie, index) => (
            <DisplayedMovies
              key={movie.id}
              setMoviePoster={setMoviePoster}
              movie={movie}
              index={index}
              pathname="latest-movie-list"
            />
          ))}
      </div>
    </div>
  );
};

export default LatestMovieList;
