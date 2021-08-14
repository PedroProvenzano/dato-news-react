import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../features/counter/generalSlice";
import getGeneralTab from "../features/counter/selector";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { Link } from "react-router-dom";

export default function SectionDrawer({ anchorRef, setIsHome }) {
  const dispatch = useDispatch();
  const { mobileNav } = useSelector(getGeneralTab());

  const handleClose = () => {
    dispatch(toggleNav());
  };

  return (
    <div className="drawer">
      <Popper
        open={mobileNav}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={mobileNav} id="menu-list-grow">
                  <Link
                    to="/seccion/actualidad"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        if (setIsHome) {
                          setIsHome(false);
                        }
                      }}
                    >
                      Actualidad
                    </MenuItem>
                  </Link>
                  <Link
                    to="/seccion/cultura"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        if (setIsHome) {
                          setIsHome(false);
                        }
                      }}
                    >
                      Cultura
                    </MenuItem>
                  </Link>
                  <Link
                    to="/seccion/deportes"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        if (setIsHome) {
                          setIsHome(false);
                        }
                      }}
                    >
                      Deportes
                    </MenuItem>
                  </Link>
                  <Link
                    to="/seccion/streaming"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        if (setIsHome) {
                          setIsHome(false);
                        }
                      }}
                    >
                      Streaming
                    </MenuItem>
                  </Link>
                  <Link
                    to="/seccion/espectaculos"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        if (setIsHome) {
                          setIsHome(false);
                        }
                      }}
                    >
                      Espectaculos
                    </MenuItem>
                  </Link>
                  <Link
                    to="/seccion/entrevistas"
                    style={{ textDecoration: "none", color: "#333333" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        if (setIsHome) {
                          setIsHome(false);
                        }
                      }}
                    >
                      Entrevistas
                    </MenuItem>
                  </Link>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
