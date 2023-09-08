import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        {" "}
        <MovieList title={"Now playing "} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror Movies "} movies={movies.nowPlayingMovies} />
        {/*     
    movielist-popular
    moviecard
    movielist-trending
    movielist-nowplaying
    movielist-horror */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
