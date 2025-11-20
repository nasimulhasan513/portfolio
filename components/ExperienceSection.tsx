"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Chief Technology Officer',
    company: 'Rhombus Publications',
    period: 'Sep 2024 - Present',
    points: [
      'Designed and developed a complete e-commerce platform using Nuxt.js, Node.js, Flask, Prisma ORM, and MongoDB.',
      'Built a full order management system with cart, checkout, payment gateway integration, and real-time status updates.',
      'Integrated Paperfly API for automated logistics and tracking.',
      'Developed sales analytics dashboards and automated reporting via SMS/Email.',
      'Optimized database performance improving query response time by 40%.'
    ]
  },
  {
    role: 'Full-stack Developer',
    company: 'ACS Future School',
    period: 'Oct 2024 - Present',
    points: [
      'Built scalable backend architecture using Node.js, Express.js, and PostgreSQL.',
      'Implemented JWT-based role management for students, teachers, and admins.',
      'Integrated real-time features with WebSocket for chat and notifications.',
      'Automated recurring tasks using Google Apps Script and scheduled jobs.',
      'Deployed backend on VPS with PM2 and CI/CD pipelines.'
    ]
  },
  {
    role: 'Technical Project Executive',
    company: '10 Minute School',
    period: 'Feb 2022 - Jul 2022',
    points: [
      'Developed Google Workspace automation tools to improve workflow.',
      'Collaborated with cross-functional teams for feature rollout.',
      'Supported web product development initiatives.'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-9 gap-8 group"
            >
              {/* Date (Left on Desktop) */}
              <div className="md:col-span-4 md:text-right mb-2 md:mb-0">
                <span className="text-primary-400 font-mono text-sm">{job.period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{job.role}</h3>
                <p className="text-slate-400 text-sm">{job.company}</p>
              </div>

              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:static md:w-auto md:bg-transparent md:col-span-1 md:flex md:justify-center md:relative">
                <div className="hidden md:block absolute top-0 bottom-0 w-px bg-slate-800"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary-500 md:static md:mt-2.5 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
              </div>

              {/* Content (Right on Desktop) */}
              <div className="md:col-span-4 glass-card p-6 rounded-xl relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                <ul className="space-y-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500/50 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
