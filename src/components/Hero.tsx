function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-500/12 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-rose-900/30 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        <div className="space-y-7">
          <div className="section-label">Portfolio 2026</div>

          <div className="space-y-5">
            <p className="max-w-max rounded-full border border-pink-300/20 bg-white/5 px-4 py-2 text-sm text-pink-100/80">
              Mar del Plata, Argentina
            </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-none text-white sm:text-6xl lg:text-8xl">
            <span className="text-gradient">Valentina Olmos</span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
            Desarrolladora web Fullstack
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-[var(--color-muted)]">
            Desarrollo programas funcionales y bien diseñados, combinando lógica sólida en el backend con experiencias claras en el frontend.
          </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-pink-400 to-rose-600 px-6 py-3 text-center text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/12 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/6"
            >
              Contacto profesional
            </a>
            <a
              href="/public/ValentinaOlmos_CV_2026.docx.pdf"
              download
              className="rounded-full border border-pink-300/25 bg-pink-400/10 px-6 py-3 text-center text-sm font-semibold text-pink-100 transition hover:bg-pink-400/20"
            >
              Descargar CV ↓
            </a>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-pink-200/60">Estado actual</p>
              <p className="mt-1 font-serif text-2xl text-white">Disponible</p>
            </div>
            <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-3 py-1 text-xs text-pink-100/80">
              Junior · Trainee
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 space-y-3">
            <p className="text-xs uppercase tracking-widest text-pink-200/60">En este momento</p>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li className="flex items-center gap-2">
                <span className="text-pink-400">→</span>
                Tec. en Desarrollo de Software (IDRA, 2026)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">→</span>
                Construyendo proyectos reales.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">→</span>
                Inglés B2 · Español nativo
              </li>
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-widest text-pink-200/60 mb-2">Buscando</p>
            <p className="text-sm text-white/90 leading-6">
              Un primer rol donde pueda aportar, aprender en equipo y crecer como dev. 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;