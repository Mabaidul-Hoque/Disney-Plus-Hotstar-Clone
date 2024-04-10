import React, { useEffect, useState } from "react";
import { Genre, Movies } from "../../contexts/MovieProvider";
import { fetchTVSeriesByGenre } from "../../apis/tvApi";
import { ShowLists } from "../ui";

interface TVListsProps {
  genre: Genre;
}

const TVLists: React.FC<TVListsProps> = ({ genre }) => {
  const [tvSeries, setTvSeries] = useState<Movies[]>([]);
  useEffect(() => {
    getTVSeriesByGenre();
  }, []);
  const getTVSeriesByGenre = async () => {
    const res = await fetchTVSeriesByGenre(genre.id, 1);
    setTvSeries(res.results);
  };
  return (
    <div>
      <ShowLists
        movies={tvSeries}
        catTitle={genre.name}
        movieListRouteByCat={`${genre.name}-tv-list`}
      />
    </div>
  );
};

export default TVLists;
