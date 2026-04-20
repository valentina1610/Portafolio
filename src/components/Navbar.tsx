const links = [
  { href: "#about", label: "Perfil" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <nav className="glass-card mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative rounded-full border border-pink-300/25 bg-pink-400/10 px-3 py-1.5 text-sm font-semibold text-pink-100">
            ✦
          </div>
          <div>
            <p className="font-serif text-2xl leading-none text-white">Valentina</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-pink-200/70">
              Developer Portfolio
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-[var(--color-muted)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-white" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-pink-300/25 bg-pink-400/10 px-4 py-2 text-sm font-semibold text-pink-100 transition hover:bg-pink-400/20"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
