import { useParams } from "react-router-dom";
import { Movies, useMovieData } from "../contexts/MovieProvider";
import { useEffect, useState } from "react";
import { fetchTVSeriesByGenre } from "../apis/tvApi";
import { ListDisplayByCat } from "../components/ui";

const TVShowListByCat = () => {
  const { catID } = useParams();
  const { genres } = useMovieData();
  const [genre, seGenre] = useState({ id: "", name: "" });
  const [tvSeries, setTvSeries] = useState<Movies[]>([]);

  useEffect(() => {
    for (let key in genres.tvGenres) {
      if (`${genres.tvGenres[key].name}-tv-list` === catID) {
        seGenre(genres.tvGenres[key]);
        break;
      }
    }
    if (genre.id) {
      getTvSeriesByGenre();
    }
  }, [genre]);

  const getTvSeriesByGenre = async () => {
    const res = await fetchTVSeriesByGenre(genre.id, 1);
    setTvSeries(res.results);
  };

  return (
    <div>
      {/* MOVIES LIST SHOW BY CAT WHICH IS COMING THROUGH GENRE */}
      {catID === `${genre.name}-tv-list` && (
        <ListDisplayByCat
          catTitle={`${genre.name} TV Series`}
          movies={tvSeries}
        />
      )}
    </div>
  );
};

export default TVShowListByCat;
