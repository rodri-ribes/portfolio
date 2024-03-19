export default function filterProject(term) {
  return function (x) {
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
