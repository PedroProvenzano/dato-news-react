import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  news: [],
  isLoading: true,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    addNews: (state, { payload: news }) => {
      state.news = news;
    },
  },
});

export const { actions, name } = generalSlice;

export const addNews = (data) => async (dispatch, _, api) => {
  dispatch(actions.addNews(data));
};

export default generalSlice.reducer;
