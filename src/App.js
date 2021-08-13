import NavbarMain from "./components/NavbarMain";
import "./styles/app.scss";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <div>
      <NavbarMain setIsHome={setIsHome} />
      {!isHome && (
        <Fab
          onClick={() => setIsHome(true)}
          className="fab-back"
          color="secondary"
        >
          <ArrowBackIcon />
        </Fab>
      )}
    </div>
  );
}

export default App;
