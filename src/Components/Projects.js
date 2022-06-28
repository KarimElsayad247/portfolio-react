import ProjectCard from "./ProjectCard";
import data from "../data"

export default function Projects() {

    const projectElements = data.map(project => (
        <ProjectCard {...project}/>
    ));

    return (
        <section className="projects">
            <h1>Projects</h1>
            {projectElements}
        </section>
    );
}