import React, { useState } from "react";

import { Movies } from "../../contexts/MovieProvider";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import DisplayedMovies from "../ui/DisplayedMovies";

interface LatestMovieListProps {
  catTitle: string;
  movies: Movies[];
}
const LatestMovieList: React.FC<LatestMovieListProps> = ({
  catTitle,
  movies,
}) => {
  const [moviePoster, setMoviePoster] = useState("");
  //   const [showContent, setShowContent] = useState(false);
  //   const [activeID, setActiveID] = useState(0);
  //   console.log("movies", movies);

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
          movies.map((movie) => (
            <DisplayedMovies
              key={movie.id}
              setMoviePoster={setMoviePoster}
              movie={movie}
            />
          ))}
      </div>
    </div>
  );
};

export default LatestMovieList;
