import styles from './Certification.module.css';



interface CertificationsProps {
id: number, 
name: string,
description: string,
stack: []
picture: string;
}

const Certification: React.FC<CertificationsProps> = ({ name, description, stack, picture}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={picture} alt="Certification" className={styles.image} />
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

