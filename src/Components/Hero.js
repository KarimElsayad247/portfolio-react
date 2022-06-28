import github from "../images/github.png"

export default function Hero() {
    return (
        <section className="Hero">
            <h1>Hello, I'm Karim!</h1>
            <p className="description">I'm a Software Engineer with an interest in all fields of software engineering!
            not a good designer though :)</p>
            <button className="social-button"><img src={github} alt="Github logo"/></button>
            <button className="social-button">LinkedIn</button>
        </section>
    );
}