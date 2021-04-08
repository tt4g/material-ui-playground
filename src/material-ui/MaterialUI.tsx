import { CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import type { FC } from "react";

const theme = createMuiTheme();
const responsiveTheme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md", "lg"],
  disableAlign: false,
});

const MaterialUI: FC = ({ children }) => (
  <ThemeProvider theme={responsiveTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export { MaterialUI };
