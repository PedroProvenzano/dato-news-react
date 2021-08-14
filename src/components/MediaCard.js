import React from "react";
import Button from "@material-ui/core/Button";

export default function MediaCard({ titulo, contenidoRes, img, autor }) {
  return (
    <div className="Card">
      <div className="CardImgContainer">
        <img src={img} alt={titulo} />
      </div>
      <p className="CardTitulo">{titulo}</p>
      <div className="CardTitCont">
        <p className="CardContenido">{contenidoRes}</p>
      </div>
      <div className="CardButtonCont">
        <Button size="small" color="primary">
          Leer nota
        </Button>
        <p className="CardAutor">{`Autor/a: ${autor}`}</p>
      </div>
    </div>
  );
}
