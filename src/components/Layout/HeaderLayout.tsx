import * as React from 'react';
import styles from '@styles/layouts/Header.module.scss';
import Link from 'next/link';

export const HeaderLayout = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerLogo}><Link href={`/`}>LOGO</Link></h1>
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
    </header>
  );
};
