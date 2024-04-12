// import React from 'react'

import { ListDisplayByCat } from "../components/ui";
import { useMovieData } from "../contexts/MovieProvider";

const Search = () => {
  const { searchResults } = useMovieData();
  return (
    <div>
      <ListDisplayByCat catTitle={""} movies={searchResults} />
    </div>
  );
};

export default Search;
