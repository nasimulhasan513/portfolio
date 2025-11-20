import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container-padding flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-white mb-2">Nasimul Hasan Deep</h3>
          <p className="text-slate-400 text-sm">Building scalable systems & digital products.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/nasimulhasan513" target="_blank" rel="noopener noreferrer" 
             className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/nasimulhasandeep" target="_blank" rel="noopener noreferrer" 
             className="text-slate-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contact@example.com" 
             className="text-slate-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="container-padding mt-8 text-center md:text-left">
        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Nasimul Hasan Deep. All rights reserved.</p>
      </div>
    </footer>
  );
}
