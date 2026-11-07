import React from 'react';
import { User, Code, Layout, Rocket, Target, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: "Full-Stack Development (MERN & MEAN)",
      description: "Hands-on experience building web applications using React.js, Angular, Node.js, Express.js, and MongoDB."
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      title: "WordPress & Elementor",
      description: "Skilled in creating and customizing responsive WordPress sites, theme updates, and visual layouts."
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: "Practical Problem Solver",
      description: "Focused on building real-world functional features such as auth, email notifications, and admin tools."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      title: "Continuous Learner",
      description: "Constantly enhancing technical capabilities, exploring modern tools, and adopting clean coding practices."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Passionate About Building <span className="text-blue-500">Practical Web Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Detailed Intro Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 relative">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-blue-400" />
              Fresher Web Developer
            </h3>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              {personalInfo.about}
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-blue-400">Career Objective:</span>{" "}
              {personalInfo.professionalGoal}
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
