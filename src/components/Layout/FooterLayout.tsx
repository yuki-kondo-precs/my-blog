import Link from 'next/link';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import styles from '@styles/layouts/Footer.module.scss';
import { Logo } from 'components/Logo';

export const FooterLayout = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentSummary}>
          <Logo size="small" />
          <p className={styles.footerContentSummaryIntroduction}>
            Hi, my name is uuki99.
          </p>
          <div className={styles.footerContentSummarySns}>
            <Link href="https://github.com/yuki-kondo-precs">
              <FiGithub />
            </Link>
            <Link href="https://twitter.com/yktsstb">
              <FiTwitter />
            </Link>
          </div>
        </div>
        <div className={styles.footerContentLinks}>
          <section className={styles.footerContentLinksSection}>
            <h3 className={styles.footerContentLinksSectionTitle}>CATEGORY</h3>
            <div className={styles.footerContentLinksSectionContent}>
              <div className={styles.footerContentLinksSectionContent}>
                <Link href="#">CSS</Link>
                <Link href="#">JavaScript</Link>
                <Link href="#">TypeScript</Link>
                <Link href="#">React JS</Link>
                <Link href="#">Next.js</Link>
                <Link href="#">More Category</Link>
              </div>
            </div>
          </section>
          <section className={styles.footerContentLinksSection}>
            <h3 className={styles.footerContentLinksSectionTitle}>ABOUT</h3>
            <div className={styles.footerContentLinksSectionContent}>
              <div className={styles.footerContentLinksSectionContent}>
                <Link href="#">About Me</Link>
                <Link href="#">Projects</Link>
                <Link href="#">Achievement</Link>
              </div>
            </div>
          </section>
          <section className={styles.footerContentLinksSection}>
            <h3 className={styles.footerContentLinksSectionTitle}>FOLLOW ME</h3>
            <div className={styles.footerContentLinksSectionContent}>
              <div className={styles.footerContentLinksSectionContent}>
                <Link href="https://github.com/yuki-kondo-precs">GitHub</Link>
                <Link href="https://twitter.com/yktsstb">Twitter</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2023 uuki99</p>
        <p>Made With ❤️‍🔥 Next.js</p>
      </div>
    </footer>
  );
};
