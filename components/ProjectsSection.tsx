const projects = [
  {
    title: 'Rhombus Publications E-Commerce',
    description: 'A complete e-commerce platform for books and educational products. Handles everything from order placement to logistics automation.',
    role: 'CTO & Lead Developer',
    tags: ['Nuxt.js', 'Node.js', 'MongoDB'],
    features: [
      'Real-time order tracking & logistics integration',
      'Automated SMS/Email notifications',
      'Sales analytics & affiliate system',
      'Exam & ranking modules'
    ]
  },
  {
    title: 'ACS Future School Platform',
    description: 'An educational platform serving thousands of students with live classes, exams, and discussion forums.',
    role: 'Full-stack Developer',
    tags: ['Node.js', 'PostgreSQL', 'Express'],
    features: [
      'Role-based access control (RBAC)',
      'Real-time chat & notifications',
      'Automated attendance & reporting',
      'Content moderation tools'
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-500 border-slate-800 hover:border-primary-500/30">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-800 flex gap-4">
                  <span className="text-sm text-slate-500">Role: {project.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
