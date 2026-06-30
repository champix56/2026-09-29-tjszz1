import type { FC } from "react";
import styles from "./Footer.module.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    Meme Generator &copy; Orsys 2026
  </div>
);

export default Footer;
