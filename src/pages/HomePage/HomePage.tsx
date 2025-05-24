
import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import styles from "./HomePage.module.css";
import Footer from "../../components/Footer/Footer";
import Certification from "../../components/Certification/Certification";

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

const HomePage: React.FC = () => {
  const [ProjectData, setProjectData] = useState<Projects[]>([]);
  const [ExperienceData, setExperienceData] = useState<Experiences[]>([]);
  const [CertificationData, setCertificationData] = useState<Certifications[]>([]);

  useEffect(() => {
    fetch("/src/assets/projects.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data.projects));
  }, []);

  useEffect(() => {
    fetch("/src/assets/experiences.json")
      .then((res) => res.json())
      .then((data) => setExperienceData(data.experiences));
  }, []);

  useEffect(() => {
    fetch("src/assets/certifications.json")
      .then((res) => res.json())
      .then((data) => setCertificationData(data.certifications));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <section className={styles.hero}>
          <img src="/src/assets/Images/Profilovka.jpg" alt="Samuel Štofik" className={styles.heroImage} />
       
          <h1>Samuel Štofik</h1>
          <h2>Frontend/Full-Stack Developer</h2>
          <p>
         Vedúci oddelenia v Kauflande, programátor so skúsenosťami v JavaScripte, TypeScripte, C# a frameworkom React. Express, SQL, MongoDB. Študent aplikovanej informatiky na STU, aktívny bežec, cyklista a fanúšik motorsportu.
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
            
Som vedúci oddelenia v Kauflande s predchádzajúcimi skúsenosťami ako shift leader v McDonald’s. Popri svojej práci sa venujem programovaniu, pričom ovládam jazyky JavaScript, TypeScript, C# a dalšie technológie ako Express, SQL, MongoDB, React a Redux.
<br />
Moje osobné projekty sú Plánovač Smien a Kontrola Dochádzky  ktoré som vyvinul s cieľom zlepšiť a zefektívniť pracovné procesy na mojom oddelení. Tieto projekty reflektujú moje praktické skúsenosti a snahu prinášať inovácie, ktoré priamo zvyšujú kvalitu práce.
<br />
Mojím cieľom je postupne sa presunúť do IT oblasti ako programátor a neustále sa vzdelávať, preto tento rok začínam štúdium aplikovanej informatiky a vývoja softvéru na STU Bratislava. Zároveň kladiem veľký dôraz na zdravý a aktívny životný štýl — venujem sa behu, horskej cyklistike, gamingu a motorsportu.
<br />
Verím, že kombinácia technických zručností, praktických skúseností a osobných záujmov mi umožňí prinášať hodnotu do každého projektu, na ktorom pracujem.
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
          <h2>Vzdelanie a Certifikáty</h2>
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
