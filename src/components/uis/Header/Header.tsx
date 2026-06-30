import type { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
      Meme<span className={styles.dot}>.</span>
    <span className={styles.js}>js</span>
 
  </div>
);

export default Header;
