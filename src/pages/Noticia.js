import { useHistory } from "react-router-dom";

function Noticia() {
  const history = useHistory();
  console.log(history.location.pathname.slice(9));
  return (
    <div className="section">
      <p>Noticia</p>
    </div>
  );
}

export default Noticia;
