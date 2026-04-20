function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.75rem] border border-white/8 bg-white/[0.03] px-6 py-5 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Valentina Olmos · Mar del Plata, Argentina.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;