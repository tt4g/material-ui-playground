import React from "react";
import { Layout } from "../layout/Layout";

const DefaultPageTemplate: React.FC = ({ children }) => (
  <Layout>{children}</Layout>
);

export { DefaultPageTemplate };
