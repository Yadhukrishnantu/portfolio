import React from 'react';
import { GraduationCap, Calendar, BookOpen, AlertCircle, Edit3 } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import PlaceholderBadge from './PlaceholderBadge';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-blue-500">& Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-base">
            Academic foundation and specialized Web Development coursework.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-slate-800 relative group"
            >
              
              {/* Top Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-blue-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {edu.period}
                  </span>
                  
                  {edu.isPlaceholder && (
                    <PlaceholderBadge label="Editable" />
                  )}
                </div>
              </div>

              {/* Details Paragraph */}
              <p className="text-slate-300 text-sm leading-relaxed p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 font-mono text-xs">
                {edu.details}
              </p>

              {/* Helpful instructions note */}
              {edu.isPlaceholder && (
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    To customize this section, update the <code className="px-1.5 py-0.5 rounded bg-slate-900 text-amber-200">educationData</code> array in <code className="px-1.5 py-0.5 rounded bg-slate-900 text-amber-200">src/data/portfolioData.js</code>.
                  </span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
