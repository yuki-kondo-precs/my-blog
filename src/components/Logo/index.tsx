import Link from 'next/link';
import styles from '@styles/objects/components/Logo.module.scss';

type LogoProps = {
  size?: 'middle' | 'small';
};

export const Logo = ({ size }: LogoProps) => {
  return (
    <h1
      className={`${styles.logo} ${size === 'small' ? styles.logoSmall : ''}`}
    >
      <Link href={`/`}>
        Inno<span className={styles.logoAccent}>LOG</span>
      </Link>
    </h1>
  );
};
