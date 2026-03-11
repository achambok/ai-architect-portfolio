export default function About() {
  return (
  // Example for About section
<section id="about" className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        About <span className="text-gradient">Me</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-lg text-gray-400 leading-relaxed">
          Your professional bio and story here...
        </p>
        <div className="flex flex-wrap gap-3">
          {['AI/ML', 'Cloud Architecture', 'MLOps', 'Edge Computing'].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full glass-card text-sm font-medium text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Experience', value: '15+ Years' },
          { label: 'Projects', value: '50+' },
          { label: 'Clients', value: '30+' },
          { label: 'Awards', value: '12' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

);
}
