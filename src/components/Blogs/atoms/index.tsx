import { ReactNode } from "react";
import CodeBlock from "./CodeBlock";

export const components = {
  code: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CodeBlock {...props} />
  ),
};
