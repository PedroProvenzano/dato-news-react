import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "../features/counter/generalSlice";

export default configureStore({
  reducer: {
    general: generalReducer,
  },
});
