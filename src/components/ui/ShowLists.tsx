import React, { useRef, useState } from "react";
import { Movies } from "../../contexts/MovieProvider";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ShowCard } from ".";

interface HomeMoviesProps {
  movies: Movies[];
  catTitle: string;
  movieListRouteByCat: string;
}

const screenWidth = window.innerWidth;

const HomeMovies: React.FC<HomeMoviesProps> = ({
  movies,
  catTitle,
  movieListRouteByCat,
}) => {
  const [slideShow, setSlideShow] = useState(false);
  const navigate = useNavigate();
  const elementRef = useRef(null);

  const sliderRight = (element: HTMLElement) => {
    console.log("screenWidth", screenWidth);

    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element: HTMLElement) => {
    console.log("screenWidth", screenWidth);

    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div
      className="w-full py-4 px-4"
      onMouseEnter={() => setSlideShow(true)}
      onMouseLeave={() => setSlideShow(false)}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-4xl pb-4">{catTitle}</h1>
        {slideShow && (
          <button
            onClick={() => navigate(`/home/${movieListRouteByCat}`)}
            className="pr-10 text-lg text-gray-200 hover:text-gray-400 font-semibold"
          >
            View All
          </button>
        )}
      </div>
      {/* MOVIES DISPLAY */}
      <div className={`relative z-10`}>
        {/* PREV NAVIGATION BTN  */}
        {slideShow && (
          <div className="absolute left-0 top-0 bg-gray-900 text-white w-8 lg:w-16 h-64 xl:h-72 flex items-center justify-center bg-opacity-40">
            <button
              onClick={() =>
                elementRef.current && sliderLeft(elementRef.current)
              }
              className="hover:scale-110 hover:text-gray-200 active:text-green-500"
            >
              <FontAwesomeIcon
                className="size-6 lg:size-8"
                icon={faChevronLeft}
              />
            </button>
          </div>
        )}

        <div
          className="flex items-center gap-2 xl:gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          ref={elementRef}
        >
          {movies &&
            movies.map((movie, index) => (
              <ShowCard
                key={movie.id}
                setMoviePoster={() => {}}
                movie={movie}
                index={index}
                pathname="home"
              />
            ))}
        </div>
        {/* NEXT NAVIGATION BTN  */}
        {slideShow && (
          <div className="absolute right-0 top-0 bg-gray-900 text-white w-8 lg:w-16 h-64 xl:h-72 flex items-center justify-center bg-opacity-40">
            <button
              onClick={() =>
                elementRef.current && sliderRight(elementRef.current)
              }
              className="hover:scale-110 hover:text-gray-200 active:text-green-500"
            >
              <FontAwesomeIcon
                className="size-6 lg:size-8"
                icon={faChevronRight}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeMovies;
