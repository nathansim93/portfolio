import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Data Analyst / Developer</p>
        <h1>Nathan Sim</h1>
        <p className="tagline">
          I build automation platforms and data tooling. Currently working in
          RPA and Data Analytics, aspiring software engineer and developer.
        </p>
        <nav className="hero-links">
          <a href="https://github.com/nathansim93">GitHub</a>
          <a href="https://linkedin.com/in/nathansim93">LinkedIn</a>
          <a href="mailto:nathansim93@gmail.com">Email</a>
        </nav>
      </header>

      <main>
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>

      <footer>
        <p>Built with React and TypeScript.</p>
      </footer>
    </div>
  );
}

export default App;