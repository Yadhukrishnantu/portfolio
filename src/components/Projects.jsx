import React, { useState } from 'react';
import { FolderGit2, ExternalLink, CheckCircle2, Info, Sparkles, Terminal, Database, Server, Smartphone, Building, Utensils, Landmark, Users } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import PlaceholderBadge from './PlaceholderBadge';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper to render stylized mock UI per project
  const renderMockUI = (project, idx) => {
    switch (project.id) {
      case 'bookworm':
        return (
          <div className="w-full space-y-3 font-mono text-xs text-left px-2">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-blue-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">📚 BookWorm MERN</span>
              <span className="text-[10px] text-emerald-400">JWT Auth Active</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Books CRUD</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">OTP Mailer</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Cron Fines</div>
            </div>
          </div>
        );
      case 'employee-management':
        return (
          <div className="w-full space-y-3 font-mono text-xs text-left px-2">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-teal-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Employee Records</span>
              <span className="text-[10px] text-blue-400">REST APIs</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Create/Read</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Update/Delete</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Mongo Schema</div>
            </div>
          </div>
        );
      case 'hotel-booking':
        return (
          <div className="w-full space-y-3 font-mono text-xs text-left px-2">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-indigo-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5" /> Hotel Booking SPA</span>
              <span className="text-[10px] text-purple-400">MEAN Stack</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Angular Client</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Express API</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Reservations</div>
            </div>
          </div>
        );
      case 'cloudkitchen':
        return (
          <div className="w-full space-y-3 font-mono text-xs text-left px-2">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-amber-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Utensils className="w-3.5 h-3.5" /> Food Ordering UI</span>
              <span className="text-[10px] text-emerald-400">Live API</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Dynamic Menu</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Responsive</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Components</div>
            </div>
          </div>
        );
      case 'bank-management':
        return (
          <div className="w-full space-y-3 font-mono text-xs text-left px-2">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-emerald-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5" /> Cash Transactions</span>
              <span className="text-[10px] text-emerald-400">Secure MEAN</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Deposit</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Withdrawal</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">Account Ledgers</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-2">
            <Terminal className="w-10 h-10 text-blue-400 mx-auto" />
            <p className="text-xs text-slate-400 font-mono">Full-Stack Application</p>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-base">
            Full-stack MERN & MEAN web applications, Angular SPAs, and database-driven solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projectsData.map((project, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={project.id}
                className={`glass-panel rounded-3xl overflow-hidden border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                
                {/* Main Card Content */}
                <div className={`p-6 sm:p-8 grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-12 gap-8' : 'gap-6'}`}>
                  
                  {/* Visual Preview Graphic Box */}
                  <div className={`relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between group-hover:border-blue-500/30 transition-all ${
                    isFeatured ? 'lg:col-span-6 min-h-[260px]' : 'min-h-[200px]'
                  }`}>
                    
                    {/* Visual Window Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[11px] text-slate-500">{project.type}</span>
                    </div>

                    {/* Stylized Inner Mock UI */}
                    <div className="py-6 flex flex-col items-center justify-center text-center">
                      {renderMockUI(project, idx)}
                    </div>

                    {/* Bottom Tag */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-blue-400">{project.badge}</span>
                      <span className="text-slate-500">{project.technologies.length} Technologies</span>
                    </div>
                  </div>

                  {/* Text Details Box */}
                  <div className={`flex flex-col justify-between ${isFeatured ? 'lg:col-span-6' : ''}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {project.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {project.type}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 7).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 7 && (
                          <span className="px-2.5 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-md">
                            +{project.technologies.length - 7} more
                          </span>
                        )}
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2 mb-6">
                        {project.features.slice(0, isFeatured ? 5 : 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 text-xs font-semibold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <Info className="w-3.5 h-3.5" />
                        View All Features
                      </button>

                      <div className="flex items-center gap-2 ml-auto">
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                            title="View GitHub Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5 text-blue-400" />
                            GitHub
                          </a>
                        )}

                        {project.demoUrl && project.demoUrl !== '#' ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all flex items-center gap-1.5"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Demo
                          </a>
                        ) : null}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
