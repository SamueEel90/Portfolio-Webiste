import styles from "./TopProjectCard.module.css";

interface MainProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  pictures: string[];
  githubLink: string;
}

const TopProjectCard: React.FC<MainProjectCardProps> = ({
  name,
  description,
  techStack,
  pictures,
  githubLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h1>{name}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.techCards}>
          {techStack.map((tech) => (
            <p className={styles.tech} key={tech}>
              {tech}
            </p>
          ))}
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gitHub}
        >
          Link to Github
        </a>
      </div>

    <div className={styles.imageGallery}>
  <img
    src={pictures[0]}
    alt={`${name} main screenshot`}
    className={styles.phoneImage}
  />
  <div className={styles.sideImages}>
    {pictures.slice(1).map((pic, index) => (
      <img
        key={index}
        src={pic}
        alt={`${name} screenshot ${index + 2}`}
        className={styles.sideImage}
      />
    ))}
  </div>
</div>
    </div>
  );
};

export default TopProjectCard;
