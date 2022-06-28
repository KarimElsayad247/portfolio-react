export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.github}>Github</a>
            <a href={props.live}>Live</a>
        </div>
    );
}