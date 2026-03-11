"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-sm tracking-[0.3em] uppercase text-neutral-400">
          Ashley Chamboko
        </span>
        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <a href="#about" className="hover:text-neon transition-colors">About</a>
          <a href="#skills" className="hover:text-neon transition-colors">Skills</a>
          <a href="#experience" className="hover:text-neon transition-colors">Experience</a>
          <a href="#projects" className="hover:text-neon transition-colors">Projects</a>
          <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
