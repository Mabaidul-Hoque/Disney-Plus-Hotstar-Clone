import { useParams } from "react-router-dom";
import { useMovieData } from "../contexts/MovieProvider";
import { ListDisplayByCat } from "../components/ui";

const HomeShowListByCat = () => {
  const { catID } = useParams();
  const { displayLists } = useMovieData();

  return (
    <>
      {/* LATEST MOVIE LIST */}
      {catID === "latest-movie-list" && (
        <ListDisplayByCat
          catTitle="Latest Shows"
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
        <ListDisplayByCat
          catTitle="Kids Shows"
          movies={displayLists.kidsShows}
        />
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
    </>
  );
};

export default HomeShowListByCat;
