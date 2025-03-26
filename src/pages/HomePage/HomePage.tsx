
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
       
          <h1>Samuel Štofik</h1>
          <h2>Frontend/Full-Stack Developer</h2>
          <p>
          Som mladý a ambiciózny junior developer, ktorý sa neustále učí a zdokonaľuje. V kóde hľadám riešenia na všetko, čo ma napadne, alebo čo by mi mohlo uľahčiť prácu. Každý problém vnímam ako výzvu a príležitosť naučiť sa niečo nové.
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
            Som samouk v oblasti vývoja softvéru a tento rok začínam štúdium Aplikovanej informatiky a vývoja softvéru na Univerzite Mateja Bela. 
            Po absolvovaní kurzu Codecademy Full-Stack Engineer som začal vyvíjať moderné webové aplikácie so zameraním na frontend aj backend.
            <br />
            <br />
            Pracoval som s technológiami ako React, Redux, TypeScript, Node.js, Express, SQL a REST API.
            <br /> 
            V najbližších týždňoch absolvujem kurz VITA Academy C# .NET Programátor, aby som si rozšíril znalosti o C# a .NET.
            <br />
            Mojou prvou skúsenosťou ako programátor bola možnosť vývoja personálnych stránok pre kamarátov a okolie.
            <br />
            <br />
            V rámci svojho voľného času som sa venoval aj replikácii zadaní od môjho brata, ktorý je medior frontend developer.
            <br />
            <br />
            Rád tvorím spoľahlivý, efektívny a vizuálne príjemný softvér, ktorý rieši reálne problémy.
            <br/>
            Vo voľnom čase väčšinou behávam, bicyklujem, čítam, trávim čas s priateľkou a sledujem horory a motoršport.
          </p>
        </section> 

        {/* Experience */}
        <section id="experience" className={styles.experience}>
          <h2>Skúsenosti</h2>
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

        {/* Info */}
        <section>
          <p className={styles.info}>Použité technológie: < strong>React, TypeScript, Vite, CSS modules</ strong> vo Visual Studio Code, nasadenie cez Vercel</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
