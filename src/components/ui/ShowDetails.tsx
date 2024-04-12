import React from "react";
import { imgBaseUrl } from "./ShowCard";
import { TVShow } from "../../pages/TVShowDetails";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ShowDetailsProps {
  show: TVShow;
}

const ShowDetails: React.FC<ShowDetailsProps> = ({ show }) => {
  const getFormatedRuntime = () => {
    const totalTime = show?.runtime;
    if (totalTime) {
      const hr = Math.ceil(totalTime / 60);
      const min = Math.ceil(totalTime % 60);
      return `${hr} h ${min} m`;
    }
  };
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${imgBaseUrl}/${show?.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="px-4 sm:px-16 md:px-20 pt-10 md:pt-32 h-screen bg-black bg-opacity-35 ">
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-6xl italic font-mono font-semibold">
            {show?.title}
          </h1>
          <div className="flex items-center gap-1 md:gap-2 md:text-2xl font-semibold">
            <p>
              {show.type
                ? show.first_air_date?.substring(0, 4)
                : show?.release_date.substring(0, 4)}
            </p>
            <div className="w-1 h-1 bg-gray-100 rounded-full" />
            <p>
              {show.type
                ? `${show.seasons.length} seasons`
                : getFormatedRuntime()}{" "}
            </p>
            <div className="w-1 h-1 bg-gray-100 rounded-full" />
            <p>
              {show?.spoken_languages && show?.spoken_languages.length > 1
                ? `${show?.spoken_languages.length} Languages`
                : `${show?.spoken_languages[0].name}`}
            </p>
            <div className="w-1 h-1 bg-gray-100 rounded-full" />
            <p>{show?.vote_average} / 10</p>
          </div>
          {/* OVERVIEW */}
          <p>{show?.overview}</p>
          {/* GENRE */}
          <div className="flex items-center gap-1 md:gap-2 md:text-xl font-semibold">
            {show?.genres &&
              show?.genres.map((genre, index) => (
                <div key={genre.id} className="flex items-center gap-2">
                  <p>{genre.name}</p>
                  <p>{index === show?.genres.length - 1 ? "" : "|"}</p>
                </div>
              ))}
          </div>
          {/* LANGUES */}
          <div className="flex items-center gap-1 md:gap-2 md:text-xl font-semibold">
            {show?.spoken_languages &&
              show.spoken_languages.map((language) => <p>{language.name}</p>)}
          </div>
          {/* SUBSCRIBE TO WATCH IS USER NOT LOGGED IN ELSE WATCH */}
          <div className={`flex items-center gap-4 md:gap-6 mt-20`}>
            <button className="bg-gray-200 text-white text-xl md:text-2xl px-2 md:px-6 xl:px-16 py-2 md:py-3 rounded-md bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out backdrop-filter backdrop-blur-md">
              Subscribe to Watch
            </button>
            <Tooltip title="WatchList" color="blue">
              <button className="bg-gray-200 text-white text-xl md:text-2xl px-6 py-2 md:py-3 rounded-md bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out backdrop-filter backdrop-blur-md">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
