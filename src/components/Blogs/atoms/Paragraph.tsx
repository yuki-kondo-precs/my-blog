import styles from '@styles/objects/components/Article/Paragraph.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};
export const CustomP = ({ children = '' }: Props) => {
  return (
    <p className={styles.p}>
      {children}
    </p>
  );
};
