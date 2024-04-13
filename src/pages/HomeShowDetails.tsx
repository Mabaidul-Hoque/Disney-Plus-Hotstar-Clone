// import React from 'react'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TVShow } from "./TVShowDetails";
import { ShowDetails } from "../components/ui";
import { fetchMovieByMovieID } from "../apis/movieApi";
import { fetchTVShowByTvID } from "../apis/tvApi";

const HomeShowDetails = () => {
  const { showID } = useParams();
  const [show, setShow] = useState<TVShow>();

  useEffect(() => {
    getMovieByMovieID();
  }, []);

  const getMovieByMovieID = async () => {
    if (!showID) {
      console.error("showID is undefined");
      return;
    }
    const res = await fetchMovieByMovieID(showID);
    const restv = await fetchTVShowByTvID(showID);

    // console.log("res from movieByMovieId", res);
    // console.log("restv from movieByMovieId", restv);
    if (res) {
      setShow(res);
    } else if (restv) {
      setShow(restv);
    }
  };

  return <div>{show && <ShowDetails show={show} />}</div>;
};

export default HomeShowDetails;
