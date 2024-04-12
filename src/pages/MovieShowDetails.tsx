// import React from "react";

import { useParams } from "react-router-dom";
import { fetchMovieByMovieID } from "../apis/movieApi";
import { useEffect, useState } from "react";
import { Genre } from "../contexts/MovieProvider";
// import { imgBaseUrl } from "../components/ui/ShowCard";
import { ShowDetails } from "../components/ui";
import { TVShow } from "./TVShowDetails";

interface Language {
  name: string;
}
export interface Show {
  backdrop_path: string;
  genres: Genre[];
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  budget: number;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  title: string;
  vote_average: string;
  vote_count: string;
}

const MovieShowDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState<TVShow>();

  useEffect(() => {
    getMovieByMovieID();
  }, []);

  const getMovieByMovieID = async () => {
    if (!movieID) {
      console.error("movieID is undefined");
      return;
    }
    const res = await fetchMovieByMovieID(movieID);
    // console.log("res from movieByMovieId", res);
    setMovie(res);
  };

  return <div>{movie && <ShowDetails show={movie} />}</div>;
};

export default MovieShowDetails;
