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

export interface Genres {
  movieGenres: Genre[];
  tvGenres: Genre[];
}

interface MovieContextType {
  displayLists: Lists;
  setDisplayLists: React.Dispatch<React.SetStateAction<Lists>>;
  genres: Genres;
  setGenres: React.Dispatch<React.SetStateAction<Genres>>;
  searchResults: Movies[];
  setSearchResults: React.Dispatch<React.SetStateAction<Movies[]>>;
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
  genres: {
    movieGenres: [],
    tvGenres: [],
  },
  setGenres: () => {},
  searchResults: [],
  setSearchResults: () => {},
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

  const [genres, setGenres] = useState<Genres>({
    movieGenres: [],
    tvGenres: [],
  });
  const [searchResults, setSearchResults] = useState<Movies[]>([]);

  const movieData = {
    displayLists,
    setDisplayLists,
    genres,
    setGenres,
    searchResults,
    setSearchResults,
  };
  return (
    <MovieContext.Provider value={movieData}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
