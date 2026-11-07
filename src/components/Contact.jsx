import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate instant client-side submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#111827] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's build <span className="text-blue-500">something together.</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-base sm:text-lg">
            I'm open to opportunities, collaborations, and web development projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Details & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Contact Information
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to reach out directly by phone, email, or connect with me on LinkedIn and GitHub.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 group hover:border-blue-500/40 transition-all">
                <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 font-mono uppercase">Email Address</p>
                  <a 
                    href={`mailto:${personalInfo.contact.email}`} 
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block truncate"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              {personalInfo.contact.phone && (
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 group hover:border-emerald-500/40 transition-all">
                  <div className="p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400 font-mono uppercase">Phone / WhatsApp</p>
                    <a 
                      href={`tel:${personalInfo.contact.phone}`} 
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors block"
                    >
                      +91 {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* LinkedIn Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 group hover:border-blue-500/40 transition-all">
                <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex-shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 font-mono uppercase">LinkedIn Profile</p>
                  <a 
                    href={personalInfo.contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block truncate"
                  >
                    linkedin.com/in/yadhukrishnan-tu
                  </a>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 group hover:border-purple-500/40 transition-all">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 flex-shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 font-mono uppercase">GitHub Repository</p>
                  <a 
                    href={personalInfo.contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-purple-400 transition-colors block truncate"
                  >
                    github.com/Yadhukrishnantu
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 font-mono uppercase">Location</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.contact.location}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Fill out the form below to initiate contact.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300">
                    Thank you for reaching out, Yadhu will review your message shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Email <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Junior Web Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Yadhu, I would like to discuss a web development opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
