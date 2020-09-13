import { Typography } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../layout/Layout";

const IndexPage: React.FC = () => (
  <>
    <Helmet>
      <title>Index Page</title>
    </Helmet>
    <Layout>
      <Typography variant="h2">Material-UI Playground</Typography>
    </Layout>
  </>
);

export { IndexPage };
