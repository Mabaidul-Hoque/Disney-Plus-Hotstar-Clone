// import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Show } from "./MovieShowDetails";
import { fetchTVShowByTvID } from "../apis/tvApi";
import { ShowDetails } from "../components/ui";

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  poster_path: string;
  season_number: number;
}
export interface TVShow extends Show {
  seasons: Season[];
  type?: string;
  first_air_date?: string;
  last_air_date?: string;
}

const TVShowDetails = () => {
  const { tvID } = useParams();
  const [tvShow, setTvShow] = useState<TVShow>();

  useEffect(() => {
    getTvShowBytvID();
  }, []);

  const getTvShowBytvID = async () => {
    if (!tvID) {
      console.error("movieID is undefined");
      return;
    }
    const res = await fetchTVShowByTvID(tvID);
    console.log("res from movieByMovieId", res);
    setTvShow(res);
  };

  return <div>{tvShow && <ShowDetails show={tvShow} />}</div>;
};

export default TVShowDetails;
