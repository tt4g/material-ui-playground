import Box from "@material-ui/core/Box";
import React from "react";

import { Helmet } from "react-helmet";

import { Link, useLocation } from "react-router-dom";
import { routes } from "../../router/routes";

import { ErrorPageTemplate } from "../templates/ErrorPageTemplate";

const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <ErrorPageTemplate>
      <Helmet>
        <title>Not Found!</title>
      </Helmet>
      <Box>
        <h3>Not Found!</h3>
        <p>
          <code>{location.pathname}</code> not found!
        </p>
        <p>
          <Link to={routes.index.path}>Go to Index Page.</Link>
        </p>
      </Box>
    </ErrorPageTemplate>
  );
};

export { NotFoundPage };
