import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll';
import styles from '@styles/objects/components/pageTop.module.scss';

const BackToTopButton: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 300 });
  };

  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle = {
    opacity: 0,
    pointerEvents: 'none'
  };
  const activeStyle = {
    opacity: 1
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <>
      <div style={style} onClick={scrollToTop} className={styles.pageTop}>
        <IoIosArrowUp />
      </div>
    </>
  );
};

export default BackToTopButton;
