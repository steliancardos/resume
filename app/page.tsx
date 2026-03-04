'use client';

import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 bg-slate-950/95 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-semibold text-slate-100 hover:text-teal-400 transition">
            CS
          </a>
          <div className="hidden sm:flex gap-8 text-sm">
            <a href="#about" className="text-slate-400 hover:text-slate-100 transition">About</a>
            <a href="#experience" className="text-slate-400 hover:text-slate-100 transition">Experience</a>
            <a href="#skills" className="text-slate-400 hover:text-slate-100 transition">Skills</a>
            <a href="#certifications" className="text-slate-400 hover:text-slate-100 transition">Certifications</a>
            <a href="#contact" className="text-slate-400 hover:text-slate-100 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32 space-y-8">
        <div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
            Cardos Stelian
          </h1>
          <h2 className="text-2xl sm:text-3xl text-teal-400 font-medium">
            Software Engineering Manager & Full Stack Developer
          </h2>
        </div>
        
        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
          I'm a software engineering leader with 8+ years of experience designing and scaling robust web applications. 
          Specialized in .NET Core, Angular, and React, with a proven track record of building high-performing teams and delivering enterprise solutions.
        </p>
        
        <div className="flex gap-4 pt-4">
          <a href="mailto:cardosstelian@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded transition text-white font-medium">
            <Mail size={18} />
            Get in Touch
          </a>
          <a href="https://www.linkedin.com/in/cardos-stelian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-teal-400 hover:bg-teal-400/10 rounded transition">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800">
        <h3 className="text-3xl font-bold mb-16 text-slate-100">Experience</h3>
        <div className="space-y-12">
          {/* Job 1 */}
          <div className="group">
            <div className="flex items-start gap-6">
              <span className="text-teal-400 font-mono text-sm pt-1 flex-shrink-0">01</span>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition">
                  Team Lead & Full Stack Developer
                </h4>
                <p className="text-teal-400 text-sm font-medium mt-1">Talenting Software</p>
                <p className="text-slate-400 text-sm mt-1">Dec 2020 – Present | Romania</p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  Led development and QA teams delivering enterprise-grade applications for external clients including Continental. 
                  Architected scalable solutions and mentored developers across the organization.
                </p>
                <ul className="mt-3 space-y-2 text-slate-400 text-sm">
                  <li>• Architected scalable web applications using .NET Core, Angular, and React</li>
                  <li>• Managed cross-functional teams and oversaw code quality and system documentation</li>
                  <li>• Optimized database performance and API architecture for enterprise solutions</li>
                  <li>• Championed Agile best practices across teams</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="group">
            <div className="flex items-start gap-6">
              <span className="text-teal-400 font-mono text-sm pt-1 flex-shrink-0">02</span>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition">
                  Software Engineer Team Lead
                </h4>
                <p className="text-teal-400 text-sm font-medium mt-1">NTT DATA Romania</p>
                <p className="text-slate-400 text-sm mt-1">Feb 2020 – Dec 2020 | Cluj, Romania</p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  Led and managed developer teams for client-specific software solutions, delegated tasks, tracked metrics, 
                  and fostered an open communication culture.
                </p>
              </div>
            </div>
          </div>

          {/* Job 3 */}
          <div className="group">
            <div className="flex items-start gap-6">
              <span className="text-teal-400 font-mono text-sm pt-1 flex-shrink-0">03</span>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition">
                  Full Stack C# ASP.NET Developer
                </h4>
                <p className="text-teal-400 text-sm font-medium mt-1">NTT DATA Romania</p>
                <p className="text-slate-400 text-sm mt-1">Jun 2019 – Feb 2020 | Cluj, Romania</p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  Developed features for eCommerce and embedded systems platforms. Enhanced performance 
                  and modularity through code optimization and database query improvements.
                </p>
              </div>
            </div>
          </div>

          {/* Job 4 */}
          <div className="group">
            <div className="flex items-start gap-6">
              <span className="text-teal-400 font-mono text-sm pt-1 flex-shrink-0">04</span>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition">
                  C# ASP.NET Developer
                </h4>
                <p className="text-teal-400 text-sm font-medium mt-1">VIVAJO</p>
                <p className="text-slate-400 text-sm mt-1">Dec 2017 – Jun 2019 | Cluj, Romania</p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  Created and maintained .NET applications with C#. Developed UI systems for embedded and mobile platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Job 5 */}
          <div className="group">
            <div className="flex items-start gap-6">
              <span className="text-teal-400 font-mono text-sm pt-1 flex-shrink-0">05</span>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition">
                  C# ASP.NET Developer
                </h4>
                <p className="text-teal-400 text-sm font-medium mt-1">Estrategy B.V.</p>
                <p className="text-slate-400 text-sm mt-1">Feb 2017 – Dec 2017 | Goes, Netherlands</p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  Maintained and expanded existing ASP.NET web applications for international clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800">
        <h3 className="text-3xl font-bold mb-16 text-slate-100">Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-teal-400 font-semibold mb-4 text-sm uppercase tracking-wider">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['C#', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Python', 'HTML5', 'CSS3'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded text-sm text-slate-300 hover:border-teal-400/50 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-teal-400 font-semibold mb-4 text-sm uppercase tracking-wider">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {['ASP.NET Core', 'Angular 7+', 'React', 'Entity Framework', 'MVC'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded text-sm text-slate-300 hover:border-teal-400/50 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-teal-400 font-semibold mb-4 text-sm uppercase tracking-wider">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {['Azure DevOps', 'Git', 'Postman', 'Visual Studio', 'MySQL Workbench'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded text-sm text-slate-300 hover:border-teal-400/50 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-teal-400 font-semibold mb-4 text-sm uppercase tracking-wider">Concepts & Methodologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Microservices', 'Domain-Driven Design', 'SOLID', 'Event Sourcing', 'CQRS', 'Agile', 'Scrum'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded text-sm text-slate-300 hover:border-teal-400/50 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800">
        <h3 className="text-3xl font-bold mb-16 text-slate-100">Certifications & Credentials</h3>
        <div className="space-y-4">
          {[
            { name: 'Angular Level 2', issuer: 'Credential ID: 5E22M18', expires: 'Expires May 2027' },
            { name: 'Angular Level 1', issuer: 'Credential ID: 5D23KVS', expires: 'Expires Apr 2027' },
            { name: 'Angular Developer', issuer: 'TestDome • ID: 6179e88dbf6b408a880555c178e8bf09', expires: '' },
            { name: 'Python Skill Assessment', issuer: 'HackerRank • ID: 27a69c655fd5', expires: '' },
            { name: 'C# Algorithms and SQL', issuer: 'TestDome • ID: 24d57d209e244799a60480f019ccec9b', expires: '' },
            { name: 'Web Development FastTrack', issuer: 'IT Academy', expires: '' },
          ].map((cert, idx) => (
            <div key={idx} className="group flex items-start gap-4 p-4 rounded border border-slate-800 hover:border-teal-400/50 transition">
              <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h4 className="text-slate-100 font-medium group-hover:text-teal-400 transition">{cert.name}</h4>
                <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                {cert.expires && <p className="text-slate-500 text-xs mt-1">{cert.expires}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-slate-100">Get In Touch</h3>
            <p className="text-lg text-slate-300 max-w-2xl">
              I'm always interested in discussing engineering, leadership, and building great products. 
              Feel free to reach out for opportunities or just a friendly conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:cardosstelian@proton.me" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded transition text-white font-medium"
            >
              <Mail size={18} />
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/cardos-stelian" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-teal-400 hover:bg-teal-400/10 rounded transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center text-slate-500 text-sm space-y-2">
          <p>Designed & built by Cardos Stelian</p>
          <p>&copy; 2026. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
