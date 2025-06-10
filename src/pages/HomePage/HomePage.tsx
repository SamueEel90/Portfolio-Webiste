
import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import styles from "./HomePage.module.css";
import Footer from "../../components/Footer/Footer";
import Certification from "../../components/Certification/Certification";
import TopProjectCard from "../../components/TopProject/TopProjectCard";

interface Projects {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  picture: string;
}

interface Experiences {
  id: number;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

interface Certifications {
  id: number;
  name: string;
  description: string;
  stack: [];
  picture: string;
}
interface TopProject {
  name: string;
  description: string;
  techStack: string[];
  pictures: string[];
  githubLink: string;
}

const HomePage: React.FC = () => {
  const [ProjectData, setProjectData] = useState<Projects[]>([]);
  const [ExperienceData, setExperienceData] = useState<Experiences[]>([]);
  const [CertificationData, setCertificationData] = useState<Certifications[]>([]);
  const [topProjectData, setTopProjectData] = useState<TopProject | null>(null);;
   useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, experiencesRes, certificationsRes, topProjectRes] = await Promise.all([
          fetch("/projects.json"),
          fetch("/experiences.json"),
          fetch("/certifications.json"),
          fetch("/topProject.json")
        ]);

        const [projectsData, experiencesData, certificationsData, topProjectJson] = await Promise.all([
          projectsRes.json(),
          experiencesRes.json(),
          certificationsRes.json(),
          topProjectRes.json()
        ]);

        setProjectData(projectsData.projects);
        setExperienceData(experiencesData.experiences);
        setCertificationData(certificationsData.certifications);
        setTopProjectData(topProjectJson); // predpokladáme objekt, nie pole
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <section className={styles.hero}>
          <img src="Profilovka.jpg" alt="Samuel Štofik" className={styles.heroImage} />
       
          <h1>Samuel Štofik</h1>
          <h2>Frontend/Full-Stack Developer</h2>
          <p>
         Vedúci oddelenia v Kauflande.Frontend/Full-Stack Programátor.Aktívny bežec, cyklista a fanúšik motoršportu.
          </p>
        </section> 
        <Footer />
      </div>

      <div className={styles.rightSide}>
        {/* About */}
        <section id="about" className={styles.about}>
          <h2>O mne</h2>
          <br />
          <p>
           
            <br />
            Som vedúci oddelenia v Kauflande s predchádzajúcimi skúsenosťami ako shift leader v McDonald’s. Popri svojom zamestnaní sa aktívne venujem programovaniu. Môj tech stack je JavaScript, TypeScript, C#, React, React-Native, Express, Node.js, SQL, MongoDB a Redux.
            <br />
            Mojím cieľom je postupne sa presunúť do IT oblasti ako programátor a neustále sa vzdelávať.
            <br />
            Tento rok začnem štúdium aplikovanej informatiky na Slovenskej technickej univerzite v Bratislave.
            Zároveň kladiem veľký dôraz na zdravý a aktívny životný štýl — venujem sa behu, horskej cyklistike a motorsportu.
            <br />
            Verím, že kombinácia technických zručností, praktických skúseností a osobných záujmov mi umožní prinášať hodnotu do každého projektu, na ktorom pracujem.
          </p>
        </section> 

        {/* Experience */}
        <section id="experience" className={styles.experience}>
          <h2> Pracovné Skúsenosti</h2>
          {ExperienceData.map((experience) => (
            <div key={experience.id}>
              <ExperienceCard
                id={experience.id}
                position={experience.position}
                company={experience.company}
                startDate={experience.startDate}
                endDate={experience.endDate}
                responsibilities={experience.responsibilities}
              />
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section id="certifications" className={styles.certification}>
          <h2>Certifikáty</h2>
          {CertificationData.map((certification) => (
            <div key={certification.id}>
              <Certification
                id={certification.id}
                picture={certification.picture}
                name={certification.name}
                stack={certification.stack}
                description={certification.description}
              />
            </div>
          ))}
        </section>

      

        {/* Projects */}
        <section id="projects" className={styles.projects}>
          <h2>Projekty</h2> 
          {topProjectData && <TopProjectCard {...topProjectData} />}
          {ProjectData.map((project) => (
            <div key={project.id}>
              <ProjectCard
                id={project.id}
                name={project.name}
                description={project.description}
                techStack={project.techStack} 
                picture={project.picture}
              />
            </div>
          ))}
        </section>

     
      </div>
    </div>
  );
};

export default HomePage;
