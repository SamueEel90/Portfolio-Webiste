import React from 'react';
import styles from './Footer.module.css';
import linkedin from '../../assets/Images/linkedin.png';
import instagram from '../../assets/Images/instagram.png';
import email from '../../assets/Images/email.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <img src={linkedin} alt="l" />
        </li>
        <li>
          <img src={instagram} alt="i" />
        </li>
        <li>
          <img src={email} alt="e" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;