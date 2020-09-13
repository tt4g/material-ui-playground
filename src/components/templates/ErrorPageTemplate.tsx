import React from "react";
import { NoMenuLayout } from "../layout/Layout";

const ErrorPageTemplate: React.FC = ({ children }) => (
  <NoMenuLayout>{children}</NoMenuLayout>
);

export { ErrorPageTemplate };
