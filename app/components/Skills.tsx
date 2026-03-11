export default function Skills() {
  const skills = [
    "AI / ML Architecture",
    "MLOps & Model Lifecycle",
    "Edge AI & Distributed Inference",
    "LLM & Agentic AI Systems",
    "AWS & Azure Architecture",
    "AI Data Platforms",
    "Cloud Migration",
    "DevSecOps",
    "FinOps Optimization",
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon hover:shadow-neon transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
