import * as React from 'react';

import { HeaderLayout } from './HeaderLayout';
import mainStyles from '@styles/layouts/Main.module.scss';
import ContentsStyles from '@styles/layouts/Contents.module.scss';
import { FooterLayout } from './FooterLayout';

type ContentLayoutProps = {
  children: React.ReactNode;
};
HeaderLayout
export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <main className={mainStyles.main}>
      <HeaderLayout />
      <div className={ContentsStyles.contents}>
        {children}
      </div>
      <FooterLayout />
    </main>
  );
};
