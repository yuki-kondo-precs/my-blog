import * as React from 'react';
import styles from '@styles/layouts/Header.module.scss';
import Link from 'next/link';

export const HeaderLayout = () => {
  return (
    <header className={styles['l-header']}>
      <h1 className={styles['l-header__logo']}><Link href={`/`}>LOGO</Link></h1>
      <nav className={styles['l-header__nav']}>
        <ul className={styles['l-header__nav-list']}>
          <li className={styles['l-header__nav-list-item']}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={styles['l-header__nav-list-item']}>
            <Link href={`#`}>Articles</Link>
          </li>
          <li className={styles['l-header__nav-list-item']}>
            <Link href={`#`}>About Me</Link>
          </li>
          <li className={styles['l-header__nav-list-item']}>
            <Link href={`#`}>Tags</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
