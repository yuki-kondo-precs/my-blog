import * as React from 'react';

import { HeaderLayout } from './HeaderLayout';
import mainStyles from '@styles/layouts/Main.module.scss';
import ContentsStyles from '@styles/layouts/Contents.module.scss';

type ContentLayoutProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};
HeaderLayout
export const ContentLayout = ({ content }: ContentLayoutProps) => {
  return (
    <main className={mainStyles.main}>
      <HeaderLayout />
      <div className={ContentsStyles.contents}>
        {content}
      </div>
    </main>
  );
};
