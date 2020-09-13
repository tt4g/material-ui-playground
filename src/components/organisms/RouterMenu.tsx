import { Drawer, List, ListItemText, Toolbar } from "@material-ui/core";
import React from "react";

import { routes } from "../../router/routes";
import { ListItemLink } from "../molecules/ListItemLink";

type RouterMenuProps = {
  children?: never;
};

const RouterMenu: React.FC<RouterMenuProps> = () => (
  <Drawer variant="permanent">
    <Toolbar />
    <List>
      <ListItemLink to={routes.index.path} button>
        <ListItemText primary="Index" />
      </ListItemLink>
    </List>
  </Drawer>
);

export { RouterMenu };
