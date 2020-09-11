// This component is written with reference to this guide: https://material-ui.com/guides/composition/

import { ListItem } from "@material-ui/core";
import type { ListItemProps } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

type ListItemLinkProps = ListItemProps & LinkProps;

type ForwardRefLinkProps = Omit<LinkProps, "to">;

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  const { to, children } = props;

  const renderLink = React.useMemo(
    () =>
      // eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
      React.forwardRef<any, ForwardRefLinkProps>((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to]
  );

  return <ListItem component={renderLink}>{children}</ListItem>;
};

export { ListItemLink };
export type { ListItemLinkProps };
