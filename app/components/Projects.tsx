export default function Projects() {
  const projects = [
    {
      title: "Agentic AI Orchestration Framework",
      desc: "Multi-agent AI system for autonomous workflow execution.",
    },
    {
      title: "Edge AI Inference Platform",
      desc: "Offline-first AI inference for disconnected IoT environments.",
    },
    {
      title: "FinTech MLOps Platform",
      desc: "End-to-end ML pipeline for financial analytics.",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon hover:shadow-neon transition"
            >
              <h3 className="text-xl text-neon">{p.title}</h3>
              <p className="text-neutral-300 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
