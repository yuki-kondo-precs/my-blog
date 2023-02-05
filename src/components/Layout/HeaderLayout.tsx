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
            <MdOutlineArticle />
            <Link href={`#`}>Articles</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <RiQuillPenLine />
            <Link href={`#`}>About</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <FiRss />
            <Link href={`#`}>RSS</Link>
          </li>
          <li className={styles.headerNavListItem}>
            <BsSun />
            {/* <BsMoon /> */}
            <Link href={`#`}>Theme</Link>
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
