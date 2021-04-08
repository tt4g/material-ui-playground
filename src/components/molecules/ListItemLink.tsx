// This component is written with reference to this guide: https://material-ui.com/guides/composition/

import { ListItem } from "@material-ui/core";
import type { ListItemProps } from "@material-ui/core";
import { forwardRef, useMemo } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

type ListItemLinkProps = ListItemProps & LinkProps;

type ForwardRefLinkProps = Omit<
  LinkProps,
  "component" | "to" | "innerRef" | "replace"
>;

const ListItemLink: FC<ListItemLinkProps> = (props) => {
  const {
    component,
    to,
    replace,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    innerRef: _innerRef, // unused
    children,
  } = props;

  const renderLink = useMemo(
    () =>
      // eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
      forwardRef<any, ForwardRefLinkProps>((linkProps, ref) => (
        <Link
          ref={ref}
          {...linkProps}
          component={component}
          to={to}
          replace={replace}
        />
      )),
    [component, to, replace]
  );

  return <ListItem component={renderLink}>{children}</ListItem>;
};

export { ListItemLink };
export type { ListItemLinkProps };
