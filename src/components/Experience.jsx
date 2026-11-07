import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#111827] relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-blue-500">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-base">
            Hands-on internship experience in real-world web development workflows and CMS management.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-800" />

          {experienceData.map((item, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0">
              
              {/* Timeline Marker Dot */}
              <div className="absolute top-1.5 left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/30 z-10">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Timeline Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-12 sm:even:ml-auto sm:even:pl-12 sm:even:pr-0">
                <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-slate-800 relative">
                  
                  {/* Internship Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {item.period}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.role}
                  </h3>

                  {/* Company Name */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>

                  {/* Responsibilities Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Key Responsibilities & Learning:
                    </p>
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
