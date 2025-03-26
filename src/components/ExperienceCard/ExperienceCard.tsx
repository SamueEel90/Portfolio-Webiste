
import styles from './ExperienceCard.module.css'

interface ExperienceCarDProps {
  id : number;
  position : string;
  company : string;

  startDate : string;
  endDate : string;
  responsibilities : string[];
}

const ExperienceCard: React.FC<ExperienceCarDProps> = ({ position, company,startDate, endDate, responsibilities }) => {
  return (
    <div className={styles.experienceCard}>
    
      <h3>{position}</h3>
      <h3>{company}</h3>
       <p className={styles.date}>{startDate} - {endDate}</p>
      
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard;