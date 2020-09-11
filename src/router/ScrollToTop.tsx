import React from "react";
import { useScrollToTop } from "./useScrollToTop";

/**
 * Scroll to top after rendering when pathname of react-router is changed.
 *
 * See references: https://reactrouter.com/web/guides/scroll-restoration
 *
 * NOTE: This component use `useScrollToTop()`.
 *
 * @example
 * import React from "react";
 * import ReactDOM from "react-dom";
 *
 * import { BrowserRouter, Switch, Route } from "react-router-dom";
 *
 * ReactDOM.render(
 *   <BrowserRouter>
 *     <ScrollToTop>
 *     <Switch>
 *       <Route path="foo">
 *         <Foo />
 *       </Route>
 *       <Route path="bar">
 *         <Bar />
 *       </Route>
 *     </Switch>
 *   </BrowserRouter>
 *   document.getElementById("root"))
 */
const ScrollToTop: React.FC = () => {
  useScrollToTop();

  return null;
};

export { ScrollToTop };
