import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { searchGptMoviesList } = useSelector((store) => store.gpt);

  if (!searchGptMoviesList) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-60">
      <MovieList
        title={searchGptMoviesList[0]?.title}
        movies={searchGptMoviesList}
      />
    </div>
  );
};

export default GptMovieSuggestion;
