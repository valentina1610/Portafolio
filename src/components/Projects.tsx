const projects = [
  {
    title: "Página de ayuda — Rubicom",
    description:
      "Desarrollé la página de ayuda para Rubicom durante mi pasantía, usando PHP, CSS y Bootstrap. Colaboré con el equipo para asegurar que la interfaz sea funcional, clara y alineada con las necesidades de la empresa.",
    tech: ["PHP", "CSS", "Bootstrap"],
    type: "Pasantía",
    href: "https://ayuda.rubicom.ar/",
  },
  {
    title: "Sistema de login — PHP",
    description:
      "Sistema de autenticación con validación de usuarios y persistencia en JSON, pensado para practicar lógica, estructura y flujo de acceso seguro.",
    tech: ["PHP", "JavaScript", "JSON"],
    type: "Proyecto personal",
    href: "https://github.com/valentina1610/Sistema_de_usuarios",
  },
  {
    title: "Sistema de reservas — Hotel",
    description:
      "Sistema de reservas en consola con C#, basado en arquitectura MVC y patrones Facade, Strategy, Builder y Observer. Creación de reservas con múltiples habitaciones y cálculo del precio final.",
    tech: ["C#", ".NET", "MVC", "Patrones de diseño"],
    type: "Proyecto académico",
    href: "https://github.com/valentina1610/Hotel-System",
  },
  {
    title: "CRUD de estudiantes — Angular",
    description:
      "Aplicación web en Angular que permite gestionar estudiantes mediante operaciones CRUD (crear, leer, actualizar y eliminar) consumiendo una API REST.",
    tech: ["Angular", "TypeScript", "HTML5", "Tailwind CSS"],
    type: "Proyecto académico",
    href: "https://github.com/valentina1610/CRUD-Estudiantes-Angular",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12"
    >
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-label">Proyectos</p>
          <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
            Un recorrido por lo que ya construí y lo que sigo aprendiendo.
          </h2>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="glass-card group rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-pink-300/30 block"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-pink-100/80">
                {project.type}
              </span>
              <span className="text-pink-300 transition group-hover:translate-x-1">↗</span>
            </div>

            <h3 className="font-serif text-2xl text-white">{project.title}</h3>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pink-100/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;