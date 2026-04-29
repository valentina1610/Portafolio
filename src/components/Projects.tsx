import { useState } from "react";

const projects = [
  {
    title: "Página de ayuda — Rubicom",
    description:
      "Desarrollé la página de ayuda para Rubicom durante mi pasantía, usando PHP, CSS y Bootstrap. Colaboré con el equipo para asegurar que la interfaz sea funcional, clara y alineada con las necesidades de la empresa.",
    tech: ["PHP", "CSS", "Bootstrap"],
    type: "Pasantía",
    href: "https://ayuda.rubicom.ar/",
    image: "/projects/rubicomImagen.jpg",
  },
  {
    title: "Sistema de gestión base — PHP",
    description:
      "Sistema de gestión desarrollado en PHP puro con autenticación, control de permisos por roles y almacenamiento en JSON. Diseñado con arquitectura modular y preparado para futuras expansiones.",
    tech: ["PHP", "JavaScript", "JSON"],
    type: "Proyecto personal",
    href: "https://github.com/valentina1610/Sistema_de_usuarios",
    image: "/projects/sistemaLoginImagen.jpg",
  },
  {
    title: "Sistema de reservas — Hotel",
    description:
      "Sistema de reservas en consola con C#, basado en arquitectura MVC y patrones Facade, Strategy, Builder y Observer. Creación de reservas con múltiples habitaciones y cálculo del precio final.",
    tech: ["C#", ".NET", "MVC", "Patrones de diseño"],
    type: "Proyecto académico",
    href: "https://github.com/valentina1610/Hotel-System",
    image: "/projects/hotelSistemaImagen.jpg",
  },
  {
    title: "CRUD de estudiantes — Angular",
    description:
      "Aplicación web en Angular que permite gestionar estudiantes mediante operaciones CRUD (crear, leer, actualizar y eliminar) consumiendo una API REST.",
    tech: ["Angular", "TypeScript", "HTML5", "Tailwind CSS"],
    type: "Proyecto académico",
    href: "https://github.com/valentina1610/CRUD-Estudiantes-Angular",
    image: "/projects/crudEstudiantesImagen.jpg",
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1));

  const project = projects[current];

  return (
    <section
      id="projects"
      className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-label">Proyectos</p>
          <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
            Un recorrido por lo que ya construí y lo que sigo aprendiendo.
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[var(--color-muted)] whitespace-nowrap">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white transition hover:border-pink-300/30 hover:bg-pink-400/10"
          >
            ←
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white transition hover:border-pink-300/30 hover:bg-pink-400/10"
          >
            →
          </button>
        </div>
      </div>

      {/* Card */}
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="glass-card group grid lg:grid-cols-[1fr_1fr] rounded-[1.75rem] overflow-hidden transition hover:-translate-y-1 hover:border-pink-300/30"
      >
        {/* Texto */}
        <div className="flex flex-col justify-between p-7">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-pink-100/80">
                {project.type}
              </span>
              <span className="text-pink-300 transition group-hover:translate-x-1">↗</span>
            </div>

            <h3 className="font-serif text-2xl text-white sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 leading-7 text-[var(--color-muted)] text-sm">
              {project.description}
            </p>
          </div>

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
        </div>

        {/* Imagen */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-l" />
        </div>
      </a>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current
                ? "w-6 bg-pink-400"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;