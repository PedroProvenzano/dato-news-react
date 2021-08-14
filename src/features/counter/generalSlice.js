import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  news: [],
  isLoading: true,
  mobileNav: false,
  radioModal: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    addNews: (state, { payload: news }) => {
      state.news = news;
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    toggleMobileNav: (state) => {
      state.mobileNav = !state.mobileNav;
    },
    toggleRadioModal: (state) => {
      state.radioModal = !state.radioModal;
    },
  },
});

export const { actions, name } = generalSlice;

export const addNews = (data) => async (dispatch, _) => {
  dispatch(actions.addNews(data));
};
export const toggleNav = () => (dispatch, _) => {
  dispatch(actions.toggleMobileNav());
};
export const toggleRadio = () => (dispatch, _) => {
  dispatch(actions.toggleRadioModal());
};
export const toggleIsLoading = () => (dispatch, _) => {
  dispatch(actions.toggleLoading());
};

export default generalSlice.reducer;
