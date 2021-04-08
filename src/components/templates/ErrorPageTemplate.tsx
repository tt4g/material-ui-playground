import type { FC } from "react";
import { NoMenuLayout } from "../layout/Layout";

const ErrorPageTemplate: FC = ({ children }) => (
  <NoMenuLayout>{children}</NoMenuLayout>
);

export { ErrorPageTemplate };
