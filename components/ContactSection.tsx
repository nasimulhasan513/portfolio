import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]"></div>

      <div className="container-padding relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-slate-400 text-lg mb-12">
            I'm always open to collaborations in EdTech, automation, and cloud-driven product engineering.
          </p>
          
          <div className="glass-card p-8 rounded-2xl inline-flex flex-col items-center gap-6 w-full md:w-auto">
            <a href="mailto:contact@example.com" className="flex items-center gap-3 text-xl font-medium text-white hover:text-primary-400 transition-colors">
              <Mail className="w-6 h-6" />
              contact@example.com
            </a>
            
            <div className="flex gap-6">
              <a href="https://github.com/nasimulhasan513" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nasimulhasandeep" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
