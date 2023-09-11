import React, { useEffect, useRef } from "react";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSlice";
// import openai from "../utils/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //take movie and search in tmdb db
  const searchMovieTmdb = async (moviename) => {
    //api call

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        moviename +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addGptMovieResult(json.results));
  };

  // useEffect(() => {
  //   searchMovieTmdb();
  // }, []);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    //make an API call to gpt API and get movie results

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query: " +
    //   searchText.current.value +
    //   ". Only give me Names of 5 movies,comma seperated like the example result given ahead. Example result: Gadar, Don, Sholay, KGF, bahubali";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // const getMovies = gptResults.choices?.[0].message?.content.split(",");
    // console.log(gptResults.choices);

    const gptMovies = searchText.current.value;
    searchMovieTmdb(gptMovies);
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-3xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLang].gptSearchHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
