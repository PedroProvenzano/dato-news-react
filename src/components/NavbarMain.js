import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import RadioIcon from "@material-ui/icons/Radio";
import { Link } from "react-router-dom";
import SectionDrawer from "./Drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav, toggleRadio } from "../features/counter/generalSlice";
import getGeneralTab from "../features/counter/selector";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavbarMain({ setIsHome, width }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const anchorRef = React.useRef(null);
  const { mobileNav } = useSelector(getGeneralTab());

  const handleToggle = () => {
    dispatch(toggleNav());
  };

  return (
    <div className={classes.root}>
      <SectionDrawer setIsHome={setIsHome} anchorRef={anchorRef} />
      <AppBar position="static">
        <Toolbar>
          {width < 600 && (
            <IconButton
              ref={anchorRef}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          {width > 600 && (
            <Box className={classes.title}>
              <Link to="/seccion/actualidad" style={{ textDecoration: "none" }}>
                <Button
                  onClick={() => {
                    if (setIsHome) {
                      setIsHome(false);
                    }
                  }}
                  color="secondary"
                >
                  Actualidad
                </Button>
              </Link>
              <Link to="/seccion/cultura" style={{ textDecoration: "none" }}>
                <Button
                  onClick={() => {
                    if (setIsHome) {
                      setIsHome(false);
                    }
                  }}
                  color="secondary"
                >
                  Cultura
                </Button>
              </Link>
              <Link to="/seccion/deportes" style={{ textDecoration: "none" }}>
                <Button
                  onClick={() => {
                    if (setIsHome) {
                      setIsHome(false);
                    }
                  }}
                  color="secondary"
                >
                  Deportes
                </Button>
              </Link>
              <Link to="/seccion/streaming" style={{ textDecoration: "none" }}>
                <Button
                  onClick={() => {
                    if (setIsHome) {
                      setIsHome(false);
                    }
                  }}
                  color="secondary"
                >
                  Streaming
                </Button>
              </Link>
              <Link
                to="/seccion/espectaculos"
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={() => {
                    if (setIsHome) {
                      setIsHome(false);
                    }
                  }}
                  color="secondary"
                >
                  Espectáculos
                </Button>
              </Link>
              <Link
                to="/seccion/entrevistas"
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={() => {
                    if (setIsHome) {
                      setIsHome(false);
                    }
                  }}
                  color="secondary"
                >
                  Entrevistas
                </Button>
              </Link>
            </Box>
          )}
          <IconButton
            onClick={() => {
              dispatch(toggleRadio());
            }}
            color="secondary"
          >
            <RadioIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://www.facebook.com/lasillaenradio/", "_blank");
            }}
            color="secondary"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCxnXkeHoxiMUk2R90bNTsGw",
                "_blank"
              );
            }}
            color="secondary"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open(
                "https://www.instagram.com/lasillaenradio/",
                "_blank"
              );
            }}
            color="secondary"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://twitter.com/RadioLaSilla", "_blank");
            }}
            color="secondary"
          >
            <TwitterIcon />
          </IconButton>
          {width > 600 && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
      {width < 600 && !mobileNav && (
        <AppBar position="static">
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}
