import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import useWindowDimensions from "./WindowDim";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

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

export default function NavbarMain({ setIsHome }) {
  const classes = useStyles();

  const { width } = useWindowDimensions();

  console.log(width);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {width < 600 && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          )}
          {width > 600 && (
            <Box className={classes.title}>
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
              <Button color="secondary">Cultura</Button>
              <Button color="secondary">Deportes</Button>
              <Button color="secondary">Streaming</Button>
              <Button color="secondary">Espectáculos</Button>
              <Button color="secondary">Entrevistas</Button>
            </Box>
          )}
          <IconButton color="secondary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="secondary">
            <YouTubeIcon />
          </IconButton>
          <IconButton color="secondary">
            <InstagramIcon />
          </IconButton>
          <IconButton color="secondary">
            <TwitterIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
