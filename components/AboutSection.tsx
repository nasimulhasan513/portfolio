export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="glass-card p-8 rounded-2xl space-y-6 text-slate-300 leading-relaxed">
            <p>
              I’m a software engineer passionate about designing scalable, high-performance backend systems that power impactful digital products.
            </p>
            <p>
              As the CTO at Rhombus Publications and a Full-stack Developer at ACS Future School, I’ve built and deployed platforms serving tens of thousands of students and customers across Bangladesh. My focus is on Node.js, PostgreSQL, and AWS Cloud, creating clean architectures that scale seamlessly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-lg">Specializations</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Microservice Architectures</li>
                  <li>Efficient SQL Schemas</li>
                  <li>DevOps & CI/CD Pipelines</li>
                  <li>Automation Systems</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-lg">Beyond Code</h3>
                <p className="text-slate-400">
                  Outside of development, I’m passionate about system design, competitive programming, and exploring new technologies that improve performance and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
