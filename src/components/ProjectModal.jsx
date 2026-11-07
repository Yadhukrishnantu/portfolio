import React from 'react';
import { X, CheckCircle2, ExternalLink, Code, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import PlaceholderBadge from './PlaceholderBadge';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl bg-[#172033]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Title */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {project.badge}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.type}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full Features Checklist */}
        <div className="mb-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Key Features & System Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            {project.features.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl && project.demoUrl !== '#' ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded-xl">
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                Demo on Request
              </span>
            )}

            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <GithubIcon className="w-4 h-4 text-blue-400" />
                GitHub Repository
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
