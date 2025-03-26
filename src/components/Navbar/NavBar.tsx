import ResumeButton from "../ResumeButton/ResumeButton";
import styles from "./NavBar.module.css";
import logo from '../../assets/Images/monogram.png';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className={styles.navMid}>
        <ul>
          <li>
            <a href="#about">o mne</a>
          </li>
          <li>
            <a href="#experience">skúsenosti</a>
          </li>
          <li>
            <a href="#certifications">certifikácie</a>
          </li>
          <li>
            <a href="#projects">projekty</a>
          </li>
        </ul>
      </div>
      <ResumeButton />
    </nav>
  );
};

export default NavBar;
