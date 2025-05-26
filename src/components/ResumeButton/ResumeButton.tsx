import styles from './ResumeButton.module.css';


const ResumeButton: React.FC = () => {
  return (
    <div className={styles.resume}>
      <a href="/Zivotopis Stofik.pdf" target="_blank" rel="noopener noreferrer">
        <img src="/resume.png" alt="Resume" className={styles.resumeIcon} />
      </a>
    </div>
  );
};

export default ResumeButton; 