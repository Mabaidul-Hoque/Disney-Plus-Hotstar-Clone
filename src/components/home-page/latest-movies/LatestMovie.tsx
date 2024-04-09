import { useEffect, useState } from "react";
import { Movies, useMovieData } from "../../../contexts/MovieProvider";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../../../apis/movieApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { DisplayedMovies } from "../../ui";

const LatestMovie = () => {
  const [slideShow, setSlideShow] = useState(false);
  const [filteredLM, setFilteredLM] = useState<Movies[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { latestMovies, setLatestMovies } = useMovieData();

  useEffect(() => {
    getLatestMovies();
  }, []);

  const getLatestMovies = async () => {
    const res = await fetchMovies(
      "primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-03-01"
    );
    // console.log("res from getLatestmovies", res);
    setLatestMovies(res.results);
    setFilteredLM(() => res.results.slice(0, 6));
  };

  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    const recordsPerPage = 6;
    const lastIndx = currentPage * recordsPerPage;
    const firstIndx = lastIndx - recordsPerPage;
    console.log("currentpage", { currentPage, lastIndx, firstIndx });
    setFilteredLM(() => latestMovies.slice(firstIndx, lastIndx));
  }, [currentPage]);

  return (
    <div
      className="w-full py-4 px-4"
      onMouseEnter={() => setSlideShow(true)}
      onMouseLeave={() => setSlideShow(false)}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-4xl pb-4">Latest Releases</h1>
        {slideShow && (
          <button
            onClick={() => navigate(`/home/latest-movie-list`)}
            className="pr-10 text-lg text-gray-200 hover:text-gray-400 font-semibold"
          >
            View All
          </button>
        )}
      </div>
      <div className={` relative`}>
        {/* PREV NAVIGATION BTN  */}
        {slideShow && currentPage > 1 && (
          <div className="absolute left-0 top-0 bg-gray-900 text-white w-16 h-72 flex items-center justify-center bg-opacity-40">
            <button
              onClick={onPrev}
              className="hover:scale-110 hover:text-gray-200 active:text-green-500"
            >
              <FontAwesomeIcon className="size-8" icon={faChevronLeft} />
            </button>
          </div>
        )}

        <div className="flex items-center gap-4 ">
          {filteredLM &&
            filteredLM.map((movie, index) => (
              <DisplayedMovies
                key={movie.id}
                setMoviePoster={() => {}}
                movie={movie}
                index={index}
                pathname="home"
              />
            ))}
        </div>
        {/* NEXT NAVIGATION BTN  */}
        {slideShow && currentPage < 4 && (
          <div className="absolute right-0 top-0 bg-gray-900 text-white w-16 h-72 flex items-center justify-center bg-opacity-40">
            <button
              onClick={onNext}
              className="hover:scale-110 hover:text-gray-200 active:text-green-500"
            >
              <FontAwesomeIcon className="size-8" icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestMovie;
