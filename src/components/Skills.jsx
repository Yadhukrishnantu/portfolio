import React from 'react';
import { 
  Code, Palette, FileCode, Atom, Wind, Layers, 
  Server, Cpu, Mail, Clock, Database, GitMerge, 
  ShieldCheck, Lock, GitBranch, Webhook, 
  Globe, Layout, CpuIcon, Route, Monitor, Network,
  KeyRound, Puzzle, Send, Bug, Blocks
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/portfolioData';

// Map string icon names to Lucide icons
const iconMap = {
  Code: <Code className="w-4 h-4 text-blue-400" />,
  Palette: <Palette className="w-4 h-4 text-purple-400" />,
  FileCode: <FileCode className="w-4 h-4 text-amber-400" />,
  Atom: <Atom className="w-4 h-4 text-cyan-400" />,
  Wind: <Wind className="w-4 h-4 text-teal-400" />,
  Layers: <Layers className="w-4 h-4 text-violet-400" />,
  Server: <Server className="w-4 h-4 text-emerald-400" />,
  Cpu: <Cpu className="w-4 h-4 text-blue-400" />,
  Mail: <Mail className="w-4 h-4 text-pink-400" />,
  Clock: <Clock className="w-4 h-4 text-indigo-400" />,
  Database: <Database className="w-4 h-4 text-emerald-400" />,
  GitMerge: <GitMerge className="w-4 h-4 text-rose-400" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-blue-400" />,
  Lock: <Lock className="w-4 h-4 text-amber-400" />,
  GitBranch: <GitBranch className="w-4 h-4 text-orange-400" />,
  Github: <GithubIcon className="w-4 h-4 text-slate-300" />,
  Webhook: <Webhook className="w-4 h-4 text-purple-400" />,
  Globe: <Globe className="w-4 h-4 text-blue-400" />,
  Layout: <Layout className="w-4 h-4 text-purple-400" />,
  Route: <Route className="w-4 h-4 text-emerald-400" />,
  Monitor: <Monitor className="w-4 h-4 text-blue-400" />,
  Network: <Network className="w-4 h-4 text-indigo-400" />,
  KeyRound: <KeyRound className="w-4 h-4 text-amber-400" />,
  Puzzle: <Puzzle className="w-4 h-4 text-pink-400" />,
  Send: <Send className="w-4 h-4 text-teal-400" />,
  Bug: <Bug className="w-4 h-4 text-rose-400" />,
  Blocks: <Blocks className="w-4 h-4 text-cyan-400" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#111827] relative overflow-hidden">
      
      {/* Ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <CpuIcon className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies & <span className="text-blue-500">Tools</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-base">
            Technologies, frameworks, and practical tools I have worked with across frontend, backend, databases, and CMS.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    {group.skills.length} Techs
                  </span>
                </div>
                
                <p className="text-sm text-slate-400 mb-6">
                  {group.description}
                </p>

                {/* Skill Badges Flex Container */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 text-slate-200 text-sm font-medium transition-all group"
                    >
                      <span className="p-1 rounded-lg bg-slate-800 group-hover:scale-110 transition-transform">
                        {iconMap[skill.icon] || <Code className="w-4 h-4 text-blue-400" />}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
