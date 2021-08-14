import React from "react";
//import { useSelector } from "react-redux";
import MainNews from "../components/MainNews";
//import getGeneralTab from "../features/counter/selector";

function Home() {
  //const { news } = useSelector(getGeneralTab());

  return (
    <div className="section">
      <MainNews />
    </div>
  );
}

export default Home;
