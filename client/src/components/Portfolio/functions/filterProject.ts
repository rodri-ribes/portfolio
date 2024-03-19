import { ProjectCard } from "../CardProject/CardProject";

export default function filterProject(term: {
  technology: string
  category: string
}) {
  return function (x: ProjectCard) {
    return (
      (x.technology.includes(term.technology) ||
        term.technology.includes("Todos") ||
        term.technology.includes("All")) &&
      (x.type.includes(term.category) ||
        term.category.includes("Todos") ||
        term.category.includes("All"))
    );
  };
}
