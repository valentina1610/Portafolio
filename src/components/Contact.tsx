const links = [
  {
    label: "Email",
    value: "valentinaolmos1610@gmail.com",
    href: "mailto:valentinaolmos1610@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/valentina-olmos-0a06852bb",
    href: "https://www.linkedin.com/in/valentina-olmos-0a06852bb/",
  },
  {
    label: "GitHub",
    value: "github.com/valentina1610",
    href: "https://github.com/valentina1610",
  },
  {
    label: "Whatsapp",
    value: "+54 9 223 586-1375",
    href: "https://wa.me/542235861375",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="section-shell rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="section-label">Contacto</p>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Disponible para oportunidades, práctica profesional y nuevos desafíos.
          </h2>
          <p className="max-w-2xl leading-8 text-[var(--color-muted)]">
            Si te interesa mi perfil para colaborar, sumar a un equipo o simplemente charlar sobre un proyecto, podés escribirme por cualquiera de estos canales.
          </p>
        </div>

        <div className="glass-card rounded-[1.75rem] p-6">
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-pink-200/60">
            Canales principales
          </p>

          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/4 px-4 py-4 transition hover:border-pink-300/30 hover:bg-white/6"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-pink-200/60">
                    {link.label}
                  </p>
                  <p className="mt-1 text-sm text-white sm:text-base">{link.value}</p>
                </div>
                <span className="text-pink-300">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;