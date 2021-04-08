import type { FC } from "react";
import { Layout } from "../layout/Layout";

const DefaultPageTemplate: FC = ({ children }) => <Layout>{children}</Layout>;

export { DefaultPageTemplate };
