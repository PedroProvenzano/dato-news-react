import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGeneralTab from "../features/counter/selector";
import App from "../App";
import LinearProgress from "@material-ui/core/LinearProgress";
import { API } from "../constants/API";
import { addNews, toggleIsLoading } from "../features/counter/generalSlice";

function Loading() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getGeneralTab());

  useEffect(() => {
    fetch(API.noticias)
      .then((res) => res.json())
      .then((res) => {
        dispatch(addNews(res));
        dispatch(toggleIsLoading());
      });
  }, []);

  return (
    <>
      {!isLoading ? (
        <App />
      ) : (
        <div className="MainScreenLoading">
          <p>Bienvenido a Dato News!</p>
          <br />
          <p>Cargando noticias</p>
          <LinearProgress className="loading" color="primary" />
        </div>
      )}
    </>
  );
}

export default Loading;
