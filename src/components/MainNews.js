import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MediaCard from "../components/MediaCard";
import getGeneralTab from "../features/counter/selector";

function MainNews() {
  const { news } = useSelector(getGeneralTab());
  const [importantNews, setImportantNews] = useState(null);

  useEffect(() => {
    let arrayNoticiasImp = [];
    for (let i = 0; i < 4; i++) {
      let notaImportante = news.filter(
        (obj) => obj.importancia === `importante${i + 1}`
      );
      arrayNoticiasImp.push(notaImportante[0]);
    }
    console.log(arrayNoticiasImp);
    setImportantNews(arrayNoticiasImp);
  }, []);

  function FormRow({ noticiaUno, noticiaDos }) {
    return (
      <div className="NewsRowGridCont">
        <MediaCard
          titulo={noticiaUno.titulo}
          contenidoRes={noticiaUno.contenidoRes}
          img={JSON.parse(noticiaUno.imagenesUrl)[0]}
          autor={noticiaUno.autor}
        />
        <MediaCard
          titulo={noticiaDos.titulo}
          contenidoRes={noticiaDos.contenidoRes}
          img={JSON.parse(noticiaDos.imagenesUrl)[0]}
          autor={noticiaDos.autor}
        />
      </div>
    );
  }

  return (
    <div className="NewsGridCont">
      {importantNews && (
        <>
          <FormRow
            noticiaUno={importantNews[0]}
            noticiaDos={importantNews[1]}
          />
          <FormRow
            noticiaUno={importantNews[2]}
            noticiaDos={importantNews[3]}
          />
        </>
      )}
    </div>
  );
}

export default MainNews;
