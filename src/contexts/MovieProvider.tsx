import React, { ReactNode, createContext, useContext, useState } from "react";

export interface Movies {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date?: string;
  vote_average: string;
  vote_count: string;
  original_language: string;
  first_air_date?: string;
  name: string;
}

interface Lists {
  latestMovies: Movies[];
  actionMovies: Movies[];
  romanticMovies: Movies[];
  sciFiMovies: Movies[];
  comedyTVSeries: Movies[];
  crimeTVSeries: Movies[];
  news: Movies[];
  kidsShows: Movies[];
}
export interface Genre {
  id: string;
  name: string;
}

interface MovieContextType {
  displayLists: Lists;
  setDisplayLists: React.Dispatch<React.SetStateAction<Lists>>;
  movieGenres: Genre[];
  setMovieGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
}

const MovieContext = createContext<MovieContextType>({
  displayLists: {
    latestMovies: [],
    actionMovies: [],
    romanticMovies: [],
    sciFiMovies: [],
    comedyTVSeries: [],
    crimeTVSeries: [],
    news: [],
    kidsShows: [],
  },
  setDisplayLists: () => {},
  movieGenres: [],
  setMovieGenres: () => {},
});

export const useMovieData = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("Something went wrong with the context!");
  }
  return context;
};

interface MovieProviderProps {
  children: ReactNode;
}

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [displayLists, setDisplayLists] = useState<Lists>({
    latestMovies: [],
    actionMovies: [],
    romanticMovies: [],
    sciFiMovies: [],
    comedyTVSeries: [],
    crimeTVSeries: [],
    news: [],
    kidsShows: [],
  });

  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);

  const movieData = {
    displayLists,
    setDisplayLists,
    movieGenres,
    setMovieGenres,
  };
  return (
    <MovieContext.Provider value={movieData}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
