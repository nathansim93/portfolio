import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, summary, stack, repoUrl, liveUrl } = project;

  return (
    <article className="card">
      <div className="card-head">
        <h3>{title}</h3>
        <span className="category">{category}</span>
      </div>

      <p className="summary">{summary}</p>

      <ul className="stack">
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="card-links">
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
