import { Typography } from "@material-ui/core";
import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import { DefaultPageTemplate } from "../templates/DefaultPageTemplate";

const IndexPage: FC = () => (
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
