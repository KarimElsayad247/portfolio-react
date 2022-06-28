import ProjectCard from "./ProjectCard";
import {useEffect, useState} from "react";
import {nanoid} from "nanoid";

export default function Projects() {

    const dataUrl = "https://gist.githubusercontent.com/KarimElsayad247/921f0ecf8cd6a1a8a04e65236ff9a690/raw/294967e844349bd05fb3684615127176e6afc8e8/my_projects.json";
    const [projectsData, setProjectsData] = useState([]);

    const projectElements = projectsData.map(project => (
        <ProjectCard
            key={nanoid()}
            {...project}
        />
    ));

    useEffect(() => {
      fetch(dataUrl)
          .then(res => res.json())
          // .then(res => console.log(res))
          .then(jsonData => setProjectsData(jsonData.projects))
    }, []);

    return (
        <section className="projects">
            <h1>Projects</h1>
            {projectElements}
        </section>
    );
}