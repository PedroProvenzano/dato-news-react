import React, { useState } from "react";
import NavbarMain from "./components/NavbarMain";
import "./styles/app.scss";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Noticia from "./pages/Noticia";
import Seccion from "./pages/Seccion";
import { Link } from "react-router-dom";
import MainTitle from "./components/MainTitle";
import useWindowDimensions from "./components/WindowDim";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import getGeneralTab from "./features/counter/selector";
import { toggleRadio } from "./features/counter/generalSlice";
import Radio from "./components/Radio";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#ffa733",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "80vw",
    maxWidth: "320px",
    maxHeight: "200px",
  },
}));

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { radioModal } = useSelector(getGeneralTab());
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <div>
      <MainTitle />
      <NavbarMain width={width} setIsHome={setIsHome} />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/noticia/:id">
          <Noticia />
        </Route>
        <Route path="/seccion/:id">
          <Seccion />
        </Route>
      </Switch>
      {!isHome && (
        <Link to="/" style={{ textDecoration: "none" }}>
          <Fab
            onClick={() => setIsHome(true)}
            className="fab-back"
            color="secondary"
          >
            <ArrowBackIcon />
          </Fab>
        </Link>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={radioModal}
        onClose={() => dispatch(toggleRadio())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={radioModal}>
          <div className={classes.paper}>
            <Radio />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default App;
