import { useHistory } from "react-router-dom";

function Seccion() {
  const history = useHistory();
  return (
    <div className="section">
      <p>Seccion {history.location.pathname.slice(9)}</p>
    </div>
  );
}

export default Seccion;
