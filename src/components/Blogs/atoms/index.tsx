import { ReactNode } from 'react';
import CodeBlock from './CodeBlock';
import { CustomH1, CustomH2, CustomH3, CustomH4, CustomH5 } from './Heading';
import { CustomUl } from './List';
import { CustomP } from './Paragraph';

export const components = {
  code: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CodeBlock {...props} />
  ),
  h1: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CustomH1 {...props} />
  ),
  h2: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CustomH2 {...props} />
  ),
  h3: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CustomH3 {...props} />
  ),
  h4: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CustomH4 {...props} />
  ),
  h5: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CustomH5 {...props} />
  ),
  ul: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CustomUl {...props} />
  ),
  p: (props: JSX.IntrinsicAttributes & { children?: ReactNode }) => (
    <CustomP {...props} />
  ),
};
