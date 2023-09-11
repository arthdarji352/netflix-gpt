import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesSlice from "./moviesSlice";
import GptReducer from "./GptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    gpt: GptReducer,
    config: configReducer,
  },
});

export default appStore;
