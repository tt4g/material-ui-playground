import React from "react";

import { Helmet } from "react-helmet";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from "./components/pages/IndexPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";

import "./material-ui/material-ui-base.css";
import { MaterialUI } from "./material-ui/MaterialUI";
import { routes } from "./router/routes";
import { ScrollToTop } from "./router/ScrollToTop";

const App: React.FC = () => (
  <MaterialUI>
    <Helmet
      encodeSpecialCharacters
      titleTemplate="%s - Material-UI Playground"
      defaultTitle="App"
      defer={false}
    >
      <html lang="en" />
    </Helmet>
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Switch>
        <Route exact path={routes.index.path}>
          <IndexPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </MaterialUI>
);

export { App };
