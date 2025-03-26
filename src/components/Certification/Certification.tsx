import styles from './Certification.module.css';
import certification from "../../assets/Images/codecademy2.png";


interface CertificationsProps {
id: number, 
name: string,
description: string,
stack: []
}

const Certification: React.FC<CertificationsProps> = ({ name, description, stack }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={certification} alt="Certification" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.techContainer}>
          {stack.map((tech) => (
            <p className={styles.tech} key={tech}>{tech}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;

