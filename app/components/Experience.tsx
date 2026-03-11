export default function Experience() {
  const jobs = [
    {
      company: "Core42 (G42 Group)",
      role: "Senior Technical Account Manager – AI & Cloud Architecture",
      years: "2022–Present",
    },
    {
      company: "Core42",
      role: "Cloud Operations Engineer",
      years: "2021–2022",
    },
    {
      company: "Silicon Overdrive",
      role: "AWS Solutions Architect – EMEA",
      years: "2019–2020",
    },
    {
      company: "RetailNext",
      role: "Technical Support Engineer",
      years: "2016–2019",
    },
    {
      company: "Amazon Web Services",
      role: "Cloud Support Associate Engineer",
      years: "2012–2016",
    },
  ];

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-8">
          Experience
        </h2>

        <div className="space-y-8">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon transition"
            >
              <h3 className="text-xl text-neon">{job.company}</h3>
              <p className="text-neutral-300">{job.role}</p>
              <p className="text-neutral-500 text-sm">{job.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
