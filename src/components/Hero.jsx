import React from 'react';
import { ArrowRight, Mail, Code, Terminal, Sparkles, UserCheck, ImagePlus, ShieldAlert } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400/90 mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-purple-400 inline-block" />
              {personalInfo.title}
            </h2>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Building responsive, user-friendly web experiences with modern frontend and backend technologies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                Contact Me
              </a>
            </div>

            {/* Quick Tech Badges Pill */}
            <div className="mt-12 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500 font-sans">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">React.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">Angular</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">Node.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">Express</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">MongoDB</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">WordPress</span>
            </div>

          </div>

          {/* Right Column - Visual Graphic & Photo Placeholder */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Developer Card & Profile Placeholder Container */}
            <div className="relative w-full max-w-md">
              
              {/* Decorative Card Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-30 blur-lg transition duration-1000 group-hover:opacity-50" />

              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
                
                {/* Profile Photo Image Card */}
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl mb-6 group/photo bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo status caption */}
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{personalInfo.name}</span>
                  </div>
                </div>

                {/* Developer Floating Card Code Snippet */}
                <div className="w-full bg-slate-950/80 rounded-xl p-4 border border-slate-800 text-left font-mono text-xs text-slate-300 leading-relaxed shadow-lg">
                  <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 text-[10px] text-slate-500 font-sans">developer.config.js</span>
                  </div>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-300">"{personalInfo.title}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">level:</span> <span className="text-emerald-300">"Fresher / Entry-Level"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">openForRoles:</span> <span className="text-blue-400">true</span></p>
                  <p>&#125;;</p>
                </div>

              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 glass-panel px-3 py-2 rounded-xl text-xs font-semibold text-blue-300 flex items-center gap-2 shadow-xl border border-blue-500/20 animate-bounce duration-1000">
                <Code className="w-4 h-4 text-blue-400" /> MERN & MEAN Stacks
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 glass-panel px-3 py-2 rounded-xl text-xs font-semibold text-purple-300 flex items-center gap-2 shadow-xl border border-purple-500/20">
                <Sparkles className="w-4 h-4 text-purple-400" /> WordPress & Elementor
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
