import styles from './ResumeButton.module.css';
import resumeIcon from '../../assets/Images/resume.png'; 

const ResumeButton: React.FC = () => {
  return (
    <div className={styles.resume}>
      <a href="/Zivotopis Stofik.pdf" target="_blank" rel="noopener noreferrer">
        <img src={resumeIcon} alt="Resume" className={styles.resumeIcon} />
      </a>
    </div>
  );
};

export default ResumeButton; 