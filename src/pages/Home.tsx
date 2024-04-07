// import React from 'react'
import { useState } from "react";
import { trendingMovies } from "../data/homeMovieDetails";

const Home = () => {
  const [activeIndx, setActiveIndx] = useState(0);
  return (
    <div>
      {/* HOME HEADER */}
      <div className="">
        {trendingMovies.map((movie, index) => (
          <div key={movie.id}>
            <div className="">
              <img
                src={movie.poster}
                alt={movie.title}
                className={`${activeIndx === index ? "block" : "hidden"}`}
              />
              <div className="flex items-center justify-center gap-4 border border-gray-500 ">
                <img
                  width={100}
                  className={`absolute bottom-20 ${
                    index === 0
                      ? "right-[40%]"
                      : index === 1
                      ? "right-[32%]"
                      : index === 2
                      ? "right-[24%]"
                      : index === 3
                      ? "right-[16%]"
                      : index === 4
                      ? "right-[8%]"
                      : "right-[0%]"
                  } rounded-md cursor-pointer hover:scale-125 transition duration-300 ease-in-out ${
                    activeIndx === index && "scale-125"
                  }`}
                  src={movie.poster}
                  alt={movie.title}
                  onClick={() => setActiveIndx(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
