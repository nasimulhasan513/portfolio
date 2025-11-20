import { Server, Layout, Database, Cloud, Terminal, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Go', 'Python', 'PHP', 'Laravel']
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['Vue.js', 'Nuxt.js', 'React.js', 'AngularJS', 'Tailwind CSS', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma ORM', 'Firebase']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['AWS (EC2, RDS, S3)', 'Docker', 'CI/CD', 'Nginx', 'PM2', 'Linux']
  },
  {
    title: 'Tools & Automation',
    icon: Terminal,
    skills: ['Git', 'Google Apps Script', 'Google Workspace', 'Postman']
  },
  {
    title: 'Other',
    icon: Code2,
    skills: ['System Design', 'Competitive Programming', 'Microservices', 'REST APIs', 'WebSockets']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="container-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary-400" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-primary-500 hover:bg-primary-500/10 hover:text-primary-200 transition-all duration-300 cursor-default shadow-sm hover:shadow-primary-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
