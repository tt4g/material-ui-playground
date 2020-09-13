import { Typography } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import { DefaultPageTemplate } from "../templates/DefaultPageTemplate";

const IndexPage: React.FC = () => (
  <>
    <Helmet>
      <title>Index Page</title>
    </Helmet>
    <DefaultPageTemplate>
      <Typography variant="h2">Material-UI Playground</Typography>
    </DefaultPageTemplate>
  </>
);

export { IndexPage };
