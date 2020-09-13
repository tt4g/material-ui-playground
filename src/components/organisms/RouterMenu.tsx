import { Drawer, List, ListItemText, Toolbar } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

import { routes } from "../../router/routes";
import { ListItemNavLink } from "../molecules/ListItemNavLink";

const useStyles = makeStyles(() =>
  createStyles({
    activeLink: {
      color: green.A700,
    },
  })
);

type RouterMenuProps = {
  children?: never;
};

const RouterMenu: React.FC<RouterMenuProps> = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent">
      <Toolbar />
      <List>
        <ListItemNavLink
          exact
          to={routes.index.path}
          button
          activeClassName={classes.activeLink}
        >
          <ListItemText primary="Index" />
        </ListItemNavLink>
      </List>
    </Drawer>
  );
};

export { RouterMenu };
