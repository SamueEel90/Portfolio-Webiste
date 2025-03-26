import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  picture: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, techStack, picture }) => {
  return (
    <div className={styles.card}>
      <img src={picture} alt={name} />
      <div className={styles.cardContent}>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className={styles.techCards}>
          {techStack.map((tech) => (
            <p className={styles.tech} key={tech}>{tech}</p>
          ))}
        </div>
        <p className={styles.gitHub}>Link to Github</p>
      </div>
    </div>
  );
};

export default ProjectCard;
