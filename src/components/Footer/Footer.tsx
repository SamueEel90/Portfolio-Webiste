import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <img src="/linkedin.png" alt="l" />
        </li>
        <li>
          <img src="/instagram.png" alt="i" />
        </li>
        <li>
          <img src="/email.png"alt="e" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;