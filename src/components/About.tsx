const highlights = [
  { label: "Mentalidad", text: "Responsable, curiosa y constante. Me gusta aprender, iterar y cuidar los detalles que hacen que un sitio se vea más profesional." },
  { label: "Objetivo", text: "Sumar experiencia real en un equipo donde pueda aportar, crecer y seguir desarrollando mis habilidades técnicas y blandas." },
  { label: "Idiomas", text: "Español nativo · Inglés B2 (upper intermediate). Cómoda leyendo documentación técnica y comunicándome en entornos de trabajo." },
];

function About() {
  return (
    <section
      id="about"
      className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12"
    >
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-label">Sobre mí</p>
          <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
            Un perfil en crecimiento con sensibilidad visual y mirada técnica.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
          Soy estudiante de Desarrollo de Software con enfoque fullstack — disfruto tanto de construir la lógica del backend como de cuidar cada detalle del frontend. Me interesa entender el sistema completo y crear productos que funcionen bien por dentro y se vean bien por fuera.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map(({ label, text }) => (
          <div key={label} className="glass-card rounded-[1.75rem] p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-200/60">
              {label}
            </p>
            <p className="leading-7 text-[var(--color-muted)]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;