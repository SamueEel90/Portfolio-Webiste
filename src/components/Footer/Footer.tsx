import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <img src="/linkedin.png" alt="linkedin" />
        </li>
        <li>
          <img src="/instagram.png" alt="instagram" />
        </li>
        <li>
          <img src="/email.png"alt="enail" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;