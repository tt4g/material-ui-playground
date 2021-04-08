// This component is written with reference to this guide: https://material-ui.com/guides/composition/

import { ListItem } from "@material-ui/core";
import type { ListItemProps } from "@material-ui/core";
import { forwardRef, useMemo } from "react";
import type { FC } from "react";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

type ListItemNavLinkProps = ListItemProps & NavLinkProps;

type ForwardRefLinkProps = Omit<
  NavLinkProps,
  | "component"
  | "to"
  | "replace"
  | "innerRef"
  | "activeClassName"
  | "activeStyle"
  | "exact"
  | "strict"
  | "isActive"
  | "location"
>;

const ListItemNavLink: FC<ListItemNavLinkProps> = (props) => {
  const {
    component,
    to,
    replace,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    innerRef: _innerRef, // unused
    activeClassName,
    activeStyle,
    exact,
    strict,
    isActive,
    location,
    children,
  } = props;

  const renderLink = useMemo(
    () =>
      // eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
      forwardRef<any, ForwardRefLinkProps>((navLinkProps, ref) => (
        <NavLink
          ref={ref}
          {...navLinkProps}
          to={to}
          component={component}
          replace={replace}
          activeClassName={activeClassName}
          activeStyle={activeStyle}
          exact={exact}
          strict={strict}
          isActive={isActive}
          location={location}
        />
      )),
    [
      to,
      component,
      replace,
      activeClassName,
      activeStyle,
      exact,
      strict,
      isActive,
      location,
    ]
  );

  return <ListItem component={renderLink}>{children}</ListItem>;
};

export { ListItemNavLink };
export type { ListItemNavLinkProps };
