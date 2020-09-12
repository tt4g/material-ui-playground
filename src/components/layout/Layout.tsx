import { Container, Grid } from "@material-ui/core";

import React from "react";
import { RouterMenu } from "../organisms/RouterMenu";

const BaseLayout: React.FC = ({ children }) => (
  <Container maxWidth="md">
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={0}
    >
      {children}
    </Grid>
  </Container>
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <BaseLayout>
      <RouterMenu />
      <main>{children}</main>
    </BaseLayout>
  );
};

const NoMenuLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <BaseLayout>
      <main>{children}</main>
    </BaseLayout>
  );
};

export { Layout, NoMenuLayout };
