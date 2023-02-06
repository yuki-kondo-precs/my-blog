import Link from 'next/link';
import styles from '@styles/objects/projects/Section.module.scss';

type SectionLayoutProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  link?: string;
};
export const SectionLayout = ({ title, content, link }: SectionLayoutProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <p className={styles.sectionTitleHeading}>{title}</p>
        {link ? <Link href={link} className={styles.sectionTitleLink}>See All Article</Link> : ''}
      </h2>
      <div>
        {content}
      </div>
    </section>
  )
}
