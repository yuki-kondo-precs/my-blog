import styles from '@styles/objects/components/Article/Heading.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export const CustomH1 = ({ children = '' }: Props) => {
  return (
    <h1 className={styles.headingH1}>
      {children}
    </h1>
  );
};
export const CustomH2 = ({ children = '' }: Props) => {
  return (
    <h2 className={styles.headingH2}>
      {children}
    </h2>
  );
};
export const CustomH3 = ({ children = '' }: Props) => {
  return (
    <h3 className={styles.headingH3}>
      {children}
    </h3>
  );
};
export const CustomH4 = ({ children = '' }: Props) => {
  return (
    <h4 className={styles.headingH4}>
      {children}
    </h4>
  );
};

export const CustomH5 = ({ children = '' }: Props) => {
  return (
    <h5 className={styles.headingH5}>
      {children}
    </h5>
  );
};
