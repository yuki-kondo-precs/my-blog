import styles from '@styles/objects/components/Article/List.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export const CustomUl = ({ children = '' }: Props) => {
  return (
    <ul className={styles.List}>
      {children}
    </ul>
  );
};
