export type ProjectCategory = "automation" | "data" | "web";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "open-rpa",
    title: "Open-Source RPA Platform",
    category: "automation",
    summary:
      "A self-hosted automation platform built to replace commercial RPA licensing. Handles job scheduling, run history, and bot orchestration through a web console.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    slug: "sql-practice",
    title: "SQL Practice Playground",
    category: "data",
    summary:
      "An in-browser SQL playground for practicing analytical queries against datasets worth caring about. Runs a full database client-side with no backend.",
    stack: ["TypeScript", "React", "DuckDB-WASM"],
  },
  {
    slug: "ghost-cart",
    title: "Ghost Cart",
    category: "web",
    summary:
      "A shopping simulator that recreates the dopamine loop of online checkout without spending anything. Installable as a PWA, with a thermal receipt share mechanic.",
    stack: ["TypeScript", "HTML", "CSS"],
  },
];
