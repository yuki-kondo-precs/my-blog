import * as React from 'react';
import styles from '@styles/layouts/Header.module.scss';
import Link from 'next/link';
import { Logo } from 'components/Logo';

export const HeaderLayout = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href={`#`}>Articles</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href={`#`}>About Me</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href={`/tags`}>Tags</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.headerMenu}>
        <button className={styles.headerMenuTrigger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
