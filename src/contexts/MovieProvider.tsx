import React, { ReactNode, createContext, useContext, useState } from "react";

export interface Movies {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
  vote_count: string;
  original_language: string;
}

interface MovieContextType {
  latestMovies: Movies[];
  setLatestMovies: React.Dispatch<React.SetStateAction<Movies[]>>;
  actionMovies: Movies[];
  setActionMovies: React.Dispatch<React.SetStateAction<Movies[]>>;
  romanticMovies: Movies[];
  setRomanticMovies: React.Dispatch<React.SetStateAction<Movies[]>>;
}

const MovieContext = createContext<MovieContextType>({
  latestMovies: [],
  setLatestMovies: () => {},
  actionMovies: [],
  setActionMovies: () => {},
  romanticMovies: [],
  setRomanticMovies: () => {},
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
  const [latestMovies, setLatestMovies] = useState<Movies[]>([]);
  const [actionMovies, setActionMovies] = useState<Movies[]>([]);
  const [romanticMovies, setRomanticMovies] = useState<Movies[]>([]);

  const movieData = {
    latestMovies,
    setLatestMovies,
    actionMovies,
    setActionMovies,
    romanticMovies,
    setRomanticMovies,
  };
  return (
    <MovieContext.Provider value={movieData}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
