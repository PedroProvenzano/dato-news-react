import { createSelector } from "@reduxjs/toolkit";
import { initialState, name } from "./generalSlice";

const generalTab = (state) => state[name] || initialState;

const getGeneralTab = () => createSelector(generalTab, (substate) => substate);

export default getGeneralTab;
