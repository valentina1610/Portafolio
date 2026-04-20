const categories = [
  {
    label: "Frontend",
    techs: ["JavaScript", "TypeScript", "HTML5 / CSS3", "React", "Angular", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    techs: ["PHP", "C#", ".NET", "Java"],
  },
  {
    label: "Base de datos",
    techs: ["MySQL"],
  },
  {
    label: "Herramientas",
    techs: ["Git", "GitHub"],
  },
];

function Stack() {
  return (
    <section
      id="stack"
      className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12"
    >
      <div className="mb-8">
        <p className="section-label">Stack</p>
        <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
          Herramientas con las que ya construyo y practico.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-6 transition hover:border-pink-300/30"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-pink-200/60">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-sm text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stack;