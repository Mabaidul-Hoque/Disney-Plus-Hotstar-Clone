// import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchShowsBySearch } from "../apis/searchApis";
import { ListDisplayByCat } from "../components/ui";
import { useMovieData } from "../contexts/MovieProvider";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const { searchResults, setSearchResults, searchTerm, setSearchTerm } =
    useMovieData();

  const handleSearch = async () => {
    console.log("Searching for:", searchTerm);
    const res = await fetchShowsBySearch(searchTerm);
    console.log("res for search", res);
    setSearchResults(res.results);
  };
  return (
    <div>
      {/* SEARCH CONTAINER */}
      <div className="flex items-center px-[5%] min-[400px]:px-[10%] sm:px-[30%] absolute top-10 md:hidden">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="outline-none focus:border focus:border-blue-500 rounded-l-full p-2 text-black pl-4 hover:bg-gray-200"
        />
        <div className="bg-white w-12 h-10 border-l border-gray-400 flex items-center justify-center pl-2 rounded-r-full hover:bg-gray-200">
          <FontAwesomeIcon
            className="size-6 pr-2 cursor-pointer text-gray-700 hover:scale-110 active:text-green-500"
            icon={faMagnifyingGlass}
            onClick={handleSearch}
          />
        </div>
      </div>
      <ListDisplayByCat catTitle={""} movies={searchResults} />
    </div>
  );
};

export default Search;
