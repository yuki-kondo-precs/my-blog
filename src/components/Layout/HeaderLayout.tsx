import * as React from 'react';
import styles from '@styles/layouts/Header.module.scss';
import Link from 'next/link';
import { Logo } from 'components/Logo';
import { BsSun, BsMoon } from "react-icons/bs";
import { FiRss } from "react-icons/fi";
import { RiQuillPenLine } from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";

export const HeaderLayout = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>
            <Link href={`#`}>
              <MdOutlineArticle />
              <p>Articles</p>
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href={`#`}>
              <RiQuillPenLine />
              <p>About</p>
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href={`#`}>
              <FiRss />
              <p>RSS</p>
            </Link>
          </li>
          <li className={styles.headerNavListItem}>
            <Link href={`#`}>
              <BsSun />
              {/* <BsMoon /> */}
              <p>Theme</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
