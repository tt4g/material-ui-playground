import { CssBaseline } from "@material-ui/core";
import React from "react";

const MaterialUI: React.FC = ({ children }) => (
  <>
    <CssBaseline />
    {children}
  </>
);

export { MaterialUI };
